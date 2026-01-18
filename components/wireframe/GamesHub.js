"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Pill from "@/components/wireframe/Pill";
import Row from "@/components/wireframe/Row";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function todaySeed() {
  const d = new Date();
  const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function SnakeLite() {
  const size = 15;
  const cell = 18;
  const width = size * cell;
  const height = size * cell;

  const [running, setRunning] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const nextDirRef = useRef({ x: 1, y: 0 });
  const [snake, setSnake] = useState([
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
  ]);
  const [food, setFood] = useState({ x: 8, y: 5 });
  const [message, setMessage] = useState("Ready.");

  const occupied = useMemo(() => new Set(snake.map((p) => `${p.x},${p.y}`)), [snake]);

  const placeFood = () => {
    for (let i = 0; i < 60; i++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      if (!occupied.has(`${x},${y}`)) return { x, y };
    }
    return food;
  };

  useEffect(() => {
    if (!running) return;

    const tickMs = Math.max(220, 420 - Math.max(0, snake.length - 3) * 3);

    const id = window.setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const d = nextDirRef.current;
        const next = {
          x: (head.x + d.x + size) % size,
          y: (head.y + d.y + size) % size,
        };

        if (prev.some((p) => p.x === next.x && p.y === next.y)) {
          setRunning(false);
          setMessage("Game over.");
          return prev;
        }

        const ate = next.x === food.x && next.y === food.y;
        const nextSnake = [next, ...prev];
        if (!ate) nextSnake.pop();
        if (ate) {
          setFood(placeFood());
          setMessage("Nice.");
        }
        return nextSnake;
      });
    }, tickMs);

    return () => window.clearInterval(id);
  }, [food.x, food.y, placeFood, running, size, snake.length]);

  const reset = () => {
    setRunning(false);
    setDir({ x: 1, y: 0 });
    nextDirRef.current = { x: 1, y: 0 };
    setSnake([
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
    ]);
    setFood({ x: 8, y: 5 });
    setMessage("Ready.");
  };

  const requestDir = (next) => {
    setDir((current) => {
      if (next.x === -current.x && next.y === -current.y) return current;
      nextDirRef.current = next;
      return next;
    });
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (showHow && e.key === "Escape") {
        e.preventDefault();
        setShowHow(false);
        return;
      }
      const k = e.key;

      if (e.key === "ArrowUp") {
        e.preventDefault();
        requestDir({ x: 0, y: -1 });
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        requestDir({ x: 0, y: 1 });
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        requestDir({ x: -1, y: 0 });
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        requestDir({ x: 1, y: 0 });
      }

      if (k === "8" || k === "Numpad8") {
        e.preventDefault();
        requestDir({ x: 0, y: -1 });
      }
      if (k === "2" || k === "Numpad2") {
        e.preventDefault();
        requestDir({ x: 0, y: 1 });
      }
      if (k === "4" || k === "Numpad4") {
        e.preventDefault();
        requestDir({ x: -1, y: 0 });
      }
      if (k === "6" || k === "Numpad6") {
        e.preventDefault();
        requestDir({ x: 1, y: 0 });
      }

      if (k === "7" || k === "Numpad7") {
        e.preventDefault();
        requestDir({ x: -1, y: 0 });
      }
      if (k === "9" || k === "Numpad9") {
        e.preventDefault();
        requestDir({ x: 1, y: 0 });
      }
      if (k === "1" || k === "Numpad1") {
        e.preventDefault();
        requestDir({ x: -1, y: 0 });
      }
      if (k === "3" || k === "Numpad3") {
        e.preventDefault();
        requestDir({ x: 1, y: 0 });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showHow]);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-xs text-slate-600">
        <div>Use arrow keys.</div>
        <button
          type="button"
          onClick={() => setShowHow(true)}
          className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
        >
          How to play?
        </button>
      </div>
      <div className="mt-2 rounded-2xl border border-white/50 bg-white/55 p-3 shadow-sm backdrop-blur">
        <div className="relative mx-auto overflow-hidden rounded-xl border border-slate-900/10 bg-gradient-to-b from-slate-900/5 to-white/45" style={{ width, height }}>
          <div
            className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(15,23,42,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.14)_1px,transparent_1px)]"
            style={{ backgroundSize: `${cell}px ${cell}px` }}
          />

          {snake.map((p, idx) => (
            <div
              key={`${p.x},${p.y}`}
              className="absolute rounded-md"
              style={{
                left: p.x * cell + 2,
                top: p.y * cell + 2,
                width: cell - 4,
                height: cell - 4,
                background: idx === 0 ? "#22d3ee" : "rgba(34,211,238,0.55)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.65)",
              }}
            />
          ))}

          <div
            className="absolute rounded-md"
            style={{
              left: food.x * cell + 2,
              top: food.y * cell + 2,
              width: cell - 4,
              height: cell - 4,
              background: "#fb7185",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.65)",
            }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-slate-700">{message}</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setRunning((r) => !r)}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              {running ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="text-[11px] text-slate-600">On mobile: use the arrows.</div>
          <div className="grid grid-cols-3 gap-2">
            <div />
            <button
              type="button"
              onClick={() => requestDir({ x: 0, y: -1 })}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/60 bg-white/60 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
              aria-label="Up"
            >
              ↑
            </button>
            <div />
            <button
              type="button"
              onClick={() => requestDir({ x: -1, y: 0 })}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/60 bg-white/60 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
              aria-label="Left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => requestDir({ x: 0, y: 1 })}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/60 bg-white/60 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
              aria-label="Down"
            >
              ↓
            </button>
            <button
              type="button"
              onClick={() => requestDir({ x: 1, y: 0 })}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/60 bg-white/60 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
              aria-label="Right"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {showHow ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/25 p-6">
          <div className="w-full max-w-[360px] rounded-3xl border border-white/55 bg-white/70 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.20)] backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-slate-900">How to play</div>
                <div className="mt-1 text-sm text-slate-600">Classic Snake, like the old Nokia game.</div>
              </div>
              <button
                type="button"
                onClick={() => setShowHow(false)}
                className="shrink-0 rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
              >
                Close
              </button>
            </div>

            <div className="mt-4 text-sm text-slate-700">
              <div className="font-semibold">Controls</div>
              <div className="mt-1 text-sm text-slate-600">Use the arrow keys to change direction.</div>
              <div className="mt-3 font-semibold">Rules</div>
              <div className="mt-1 text-sm text-slate-600">Eat the food to grow.</div>
              <div className="mt-1 text-sm text-slate-600">The edges wrap around.</div>
              <div className="mt-1 text-sm text-slate-600">Don’t run into yourself.</div>
              <div className="mt-3 font-semibold">Tip</div>
              <div className="mt-1 text-sm text-slate-600">You can’t reverse direction.</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function BlockStacker() {
  const cols = 14;
  const rows = 18;
  const cell = 20;

  const width = cols * cell;
  const height = rows * cell;

  const pieces = useMemo(() => {
    const base = [
      { name: "I", color: "#22d3ee", cells: [[0, 1], [1, 1], [2, 1], [3, 1]] },
      { name: "O", color: "#fbbf24", cells: [[1, 1], [2, 1], [1, 2], [2, 2]] },
      { name: "T", color: "#a78bfa", cells: [[1, 1], [0, 2], [1, 2], [2, 2]] },
      { name: "S", color: "#34d399", cells: [[1, 1], [2, 1], [0, 2], [1, 2]] },
      { name: "Z", color: "#fb7185", cells: [[0, 1], [1, 1], [1, 2], [2, 2]] },
      { name: "J", color: "#60a5fa", cells: [[0, 1], [0, 2], [1, 2], [2, 2]] },
      { name: "L", color: "#f97316", cells: [[2, 1], [0, 2], [1, 2], [2, 2]] },
    ];

    const rot = (cells) =>
      cells
        .map(([x, y]) => {
          const cx = 1.5;
          const cy = 1.5;
          const nx = Math.round(cx + (y - cy));
          const ny = Math.round(cy - (x - cx));
          return [nx, ny];
        })
        .map(([x, y]) => [x, y]);

    const normalize = (cells) => {
      const minX = Math.min(...cells.map((c) => c[0]));
      const minY = Math.min(...cells.map((c) => c[1]));
      return cells.map(([x, y]) => [x - minX, y - minY]);
    };

    const uniqueKey = (cells) => normalize(cells).map((c) => c.join(",")).sort().join("|");

    return base.map((p) => {
      const rotations = [];
      let cur = p.cells;
      for (let i = 0; i < 4; i++) {
        const norm = normalize(cur);
        const key = uniqueKey(norm);
        if (!rotations.some((r) => uniqueKey(r) === key)) rotations.push(norm);
        cur = rot(cur);
      }
      return { ...p, rotations };
    });
  }, []);

  const [running, setRunning] = useState(true);
  const [grid, setGrid] = useState(() => Array.from({ length: rows }, () => Array(cols).fill(null)));
  const [message, setMessage] = useState("Ready.");
  const [gameOver, setGameOver] = useState(false);
  const [bag, setBag] = useState(() => []);
  const [piece, setPiece] = useState(() => ({ x: 0, y: 0, i: 0, r: 0 }));
  const [score, setScore] = useState(0);
  const [elapsedMs, setElapsedMs] = useState(0);
  const timerRef = useRef({ running: false, startedAt: 0, carried: 0 });

  const shapeCells = (p = piece) => {
    const def = pieces[p.i];
    const cells = def.rotations[p.r % def.rotations.length];
    return { def, cells };
  };

  const canPlace = (x, y, cells) => {
    for (const [cx, cy] of cells) {
      const gx = x + cx;
      const gy = y + cy;
      if (gx < 0 || gx >= cols || gy < 0 || gy >= rows) return false;
      if (grid[gy][gx]) return false;
    }
    return true;
  };

  const nextFromBag = () => {
    setBag((prev) => {
      if (prev.length) return prev;
      const next = pieces.map((_, idx) => idx);
      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = next[i];
        next[i] = next[j];
        next[j] = t;
      }
      return next;
    });
  };

  const spawn = () => {
    const shuffle = (arr) => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = a[i];
        a[i] = a[j];
        a[j] = t;
      }
      return a;
    };

    const nextBag = bag.length ? bag.slice() : shuffle(pieces.map((_, idx) => idx));
    const chosen = typeof nextBag[0] === "number" ? nextBag[0] : 0;
    setBag(nextBag.slice(1));

    const draft = { x: 0, y: 0, i: chosen, r: 0 };
    const { cells } = shapeCells(draft);
    const pieceWidth = Math.max(...cells.map((c) => c[0])) + 1;
    const spawnX = Math.max(0, Math.floor((cols - pieceWidth) / 2));
    const start = { ...draft, x: spawnX };
    const { cells: startCells } = shapeCells(start);

    if (!canPlace(start.x, start.y, startCells)) {
      setGameOver(true);
      setRunning(false);
      setMessage("Game over.");
      return;
    }

    setPiece(start);
  };

  const lockPiece = (lockedPiece) => {
    const { def, cells } = shapeCells(lockedPiece);

    setGrid((prev) => {
      const next = prev.map((r) => r.slice());
      for (const [cx, cy] of cells) {
        const gx = lockedPiece.x + cx;
        const gy = lockedPiece.y + cy;
        if (gy >= 0 && gy < rows && gx >= 0 && gx < cols) next[gy][gx] = def.color;
      }

      const kept = [];
      let cleared = 0;
      for (let y = 0; y < rows; y++) {
        if (next[y].every(Boolean)) cleared += 1;
        else kept.push(next[y]);
      }
      while (kept.length < rows) kept.unshift(Array(cols).fill(null));

      if (cleared) {
        setMessage(cleared === 1 ? "Line cleared." : `${cleared} lines cleared.`);
        setScore((s) => {
          const bonus = cleared === 1 ? 100 : cleared === 2 ? 300 : cleared === 3 ? 500 : 800;
          return s + bonus;
        });
      } else {
        setMessage("Placed.");
      }

      return kept;
    });

    window.setTimeout(() => {
      nextFromBag();
      spawn();
    }, 0);
  };

  const move = (dx) => {
    if (!running || gameOver) return;
    const { cells } = shapeCells();
    const nx = piece.x + dx;
    if (canPlace(nx, piece.y, cells)) setPiece((p) => ({ ...p, x: nx }));
  };

  const rotate = () => {
    if (!running || gameOver) return;
    const def = pieces[piece.i];
    const nr = (piece.r + 1) % def.rotations.length;
    const cells = def.rotations[nr];
    const kicks = [0, -1, 1, -2, 2];
    for (const k of kicks) {
      const nx = piece.x + k;
      if (canPlace(nx, piece.y, cells)) {
        setPiece((p) => ({ ...p, x: nx, r: nr }));
        return;
      }
    }
  };

  const softDrop = () => {
    if (!running || gameOver) return;
    const { cells } = shapeCells();
    const ny = piece.y + 1;
    if (canPlace(piece.x, ny, cells)) {
      setPiece((p) => ({ ...p, y: ny }));
      setScore((s) => s + 1);
    }
    else lockPiece(piece);
  };

  const hardDrop = () => {
    if (!running || gameOver) return;
    const { cells } = shapeCells();
    let y = piece.y;
    while (canPlace(piece.x, y + 1, cells)) y += 1;
    const distance = Math.max(0, y - piece.y);
    const locked = { ...piece, y };
    setPiece(locked);
    if (distance) setScore((s) => s + distance * 2);
    lockPiece(locked);
  };

  const reset = () => {
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(null)));
    setGameOver(false);
    setRunning(true);
    setMessage("Ready.");
    setBag([]);
    setPiece({ x: 0, y: 0, i: 0, r: 0 });
    setScore(0);
    setElapsedMs(0);
    timerRef.current = { running: true, startedAt: Date.now(), carried: 0 };
    window.setTimeout(() => {
      nextFromBag();
      spawn();
    }, 0);
  };

  useEffect(() => {
    nextFromBag();
    spawn();
  }, []);

  useEffect(() => {
    if (gameOver) {
      timerRef.current.running = false;
      return;
    }

    if (running) {
      if (!timerRef.current.running) {
        timerRef.current.running = true;
        timerRef.current.startedAt = Date.now();
      }
    } else {
      if (timerRef.current.running) {
        timerRef.current.running = false;
        timerRef.current.carried += Date.now() - timerRef.current.startedAt;
      }
    }
  }, [running, gameOver]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!timerRef.current.running) return;
      setElapsedMs(timerRef.current.carried + (Date.now() - timerRef.current.startedAt));
    }, 200);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!running || gameOver) return;
    const id = window.setInterval(() => {
      softDrop();
    }, 760);
    return () => window.clearInterval(id);
  }, [running, gameOver, piece, grid]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        move(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        move(1);
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        softDrop();
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        rotate();
      }
      if (e.key === " ") {
        e.preventDefault();
        hardDrop();
      }
      if (e.key.toLowerCase() === "p") {
        e.preventDefault();
        setRunning((r) => !r);
      }
      if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        reset();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [gameOver, move, rotate, softDrop, hardDrop]);

  const { def, cells } = shapeCells();

  const ghostY = useMemo(() => {
    let y = piece.y;
    while (canPlace(piece.x, y + 1, cells)) y += 1;
    return y;
  }, [cells, piece.x, piece.y, grid]);

  const timeText = useMemo(() => {
    const total = Math.floor(elapsedMs / 1000);
    const mm = String(Math.floor(total / 60)).padStart(2, "0");
    const ss = String(total % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }, [elapsedMs]);

  return (
    <div>
      <div className="text-xs text-slate-600">Rotate, place, clear lines.</div>
      <div className="mt-2 rounded-2xl border border-white/50 bg-white/55 p-3 shadow-sm backdrop-blur">
        <div className="mx-auto" style={{ width, height }}>
          <div
            className="relative overflow-hidden rounded-xl border border-slate-900/10 bg-gradient-to-b from-slate-900/5 to-white/40"
            style={{ width, height }}
          >
            <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(15,23,42,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.14)_1px,transparent_1px)]" style={{ backgroundSize: `${cell}px ${cell}px` }} />

            {grid.map((rowArr, y) =>
              rowArr.map((color, x) =>
                color ? (
                  <div
                    key={`${x},${y}`}
                    className="absolute rounded-md"
                    style={{
                      left: x * cell + 2,
                      top: y * cell + 2,
                      width: cell - 4,
                      height: cell - 4,
                      background: color,
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.65)",
                    }}
                  />
                ) : null
              )
            )}

            {ghostY !== piece.y
              ? cells.map(([cx, cy]) => (
                  <div
                    key={`g-${cx},${cy}`}
                    className="absolute rounded-md"
                    style={{
                      left: (piece.x + cx) * cell + 2,
                      top: (ghostY + cy) * cell + 2,
                      width: cell - 4,
                      height: cell - 4,
                      background: "rgba(15,23,42,0.10)",
                      boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.18)",
                    }}
                  />
                ))
              : null}

            {cells.map(([cx, cy]) => (
              <div
                key={`${cx},${cy}`}
                className="absolute rounded-md"
                style={{
                  left: (piece.x + cx) * cell + 2,
                  top: (piece.y + cy) * cell + 2,
                  width: cell - 4,
                  height: cell - 4,
                  background: def.color,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.70), 0 8px 18px rgba(2,6,23,0.10)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <div className="max-w-[150px] truncate text-xs font-medium text-slate-700">{message}</div>
            <div className="mt-1 text-[11px] text-slate-600">
              <span className="font-semibold">Time</span> {timeText}
            </div>
            <div className="mt-0.5 text-[11px] text-slate-600">
              <span className="font-semibold">Score</span> {score}
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            <button
              type="button"
              onClick={() => setRunning((r) => !r)}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              {running ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              onClick={() => move(-1)}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              Left
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              Right
            </button>
            <button
              type="button"
              onClick={rotate}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              Rotate
            </button>
            <button
              type="button"
              onClick={softDrop}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              Down
            </button>
            <button
              type="button"
              onClick={hardDrop}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              Drop
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-2 text-[11px] text-slate-600">
          Keys: ← → ↓ rotate=↑ hard drop=space pause=P reset=R
        </div>
      </div>
    </div>
  );
}

function DailyWord() {
  const WORD_LENGTH = 5;
  const MAX_TRIES = 6;

  const dictionary = useMemo(
    () => [
      "ABBEY",
      "ADOBE",
      "AMBER",
      "ANGEL",
      "ARROW",
      "AURAS",
      "AUDIO",
      "BLOOM",
      "BRISK",
      "CANYN",
      "CHALK",
      "CHASE",
      "CLOUD",
      "COAST",
      "CREEK",
      "CREST",
      "DAWNS",
      "DUSTY",
      "EARTH",
      "EMBER",
      "FIELD",
      "FLORA",
      "FOCUS",
      "FORGE",
      "FRESH",
      "GLIDE",
      "GLOWY",
      "GRAIN",
      "GRASS",
      "GREEN",
      "HAVEN",
      "HILLS",
      "HONEY",
      "JUNIP",
      "LIGHT",
      "MARCH",
      "MARFA",
      "MESAS",
      "MIRTH",
      "MISTY",
      "MORNI",
      "MOTIF",
      "MUSEE",
      "NIGHT",
      "OASIS",
      "OCHRE",
      "OLIVE",
      "PATIO",
      "PEARL",
      "PINED",
      "PLAZA",
      "PRISM",
      "QUIET",
      "RANGE",
      "RIVER",
      "ROADS",
      "ROUTE",
      "SAGEY",
      "SCENE",
      "SHORE",
      "SKIES",
      "SLOPE",
      "SMILE",
      "SPICE",
      "STONE",
      "SUNNY",
      "TEXAS",
      "TIDES",
      "TRAIL",
      "VISTA",
      "WATER",
      "WINDY",
      "WOODS",
    ],
    []
  );

  const seed = todaySeed();
  const answer = dictionary[seed % dictionary.length];

  const [board, setBoard] = useState(() => Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [status, setStatus] = useState("Guess the word in 6 tries.");
  const [done, setDone] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [evaluations, setEvaluations] = useState(() => Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill(null)));

  const normalized = (s) => s.toUpperCase().replace(/[^A-Z]/g, "");

  const evaluate = (guess) => {
    const out = Array(WORD_LENGTH).fill("miss");
    const a = answer.split("");
    const used = Array(WORD_LENGTH).fill(false);

    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guess[i] === a[i]) {
        out[i] = "exact";
        used[i] = true;
      }
    }

    for (let i = 0; i < WORD_LENGTH; i++) {
      if (out[i] === "exact") continue;
      const idx = a.findIndex((ch, j) => !used[j] && ch === guess[i]);
      if (idx >= 0) {
        out[i] = "near";
        used[idx] = true;
      }
    }

    return out;
  };

  const keyState = useMemo(() => {
    const rank = { miss: 0, near: 1, exact: 2 };
    const acc = {};
    for (let r = 0; r < MAX_TRIES; r++) {
      for (let c = 0; c < WORD_LENGTH; c++) {
        const ch = board[r][c];
        const ev = evaluations[r][c];
        if (!ch || !ev) continue;
        const prev = acc[ch];
        if (!prev || rank[ev] > rank[prev]) acc[ch] = ev;
      }
    }
    return acc;
  }, [board, evaluations]);

  const tileStyle = (ev, filled) => {
    if (!filled) {
      return {
        background: "rgba(255,255,255,0.75)",
        borderColor: "rgba(15,23,42,0.12)",
        color: "#0f172a",
      };
    }
    if (!ev) {
      return {
        background: "rgba(255,255,255,0.85)",
        borderColor: "rgba(15,23,42,0.18)",
        color: "#0f172a",
      };
    }
    if (ev === "exact") {
      return { background: "#16a34a", borderColor: "#16a34a", color: "#ffffff" };
    }
    if (ev === "near") {
      return { background: "#ca8a04", borderColor: "#ca8a04", color: "#ffffff" };
    }
    return { background: "#64748b", borderColor: "#64748b", color: "#ffffff" };
  };

  const keyStyle = (ev) => {
    if (ev === "exact") return { background: "rgba(22,163,74,0.85)", color: "#ffffff" };
    if (ev === "near") return { background: "rgba(202,138,4,0.85)", color: "#ffffff" };
    if (ev === "miss") return { background: "rgba(100,116,139,0.55)", color: "#0f172a" };
    return { background: "rgba(15,23,42,0.10)", color: "#0f172a" };
  };

  const pushLetter = (letter) => {
    if (done) return;
    const ch = normalized(letter).slice(0, 1);
    if (!ch) return;
    if (col >= WORD_LENGTH) return;

    setBoard((prev) => {
      const next = prev.map((r) => r.slice());
      next[row][col] = ch;
      return next;
    });
    setCol((c) => c + 1);
  };

  const backspace = () => {
    if (done) return;
    if (col <= 0) return;
    const nextCol = col - 1;
    setBoard((prev) => {
      const next = prev.map((r) => r.slice());
      next[row][nextCol] = "";
      return next;
    });
    setCol(nextCol);
  };

  const submit = () => {
    if (done) return;
    if (col !== WORD_LENGTH) {
      setStatus("Not enough letters.");
      return;
    }

    const guess = board[row].join("");

    const ev = evaluate(guess);
    setEvaluations((prev) => {
      const next = prev.map((r) => r.slice());
      next[row] = ev;
      return next;
    });

    if (guess === answer) {
      setDone(true);
      setStatus("Nice. You found it.");
      setShowWin(true);
      return;
    }

    if (row + 1 >= MAX_TRIES) {
      setDone(true);
      setStatus(`That’s six. The word was ${answer}.`);
      return;
    }

    setRow((r) => r + 1);
    setCol(0);
    setStatus("Keep going.");
  };

  const reset = () => {
    setBoard(Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill("")));
    setEvaluations(Array.from({ length: MAX_TRIES }, () => Array(WORD_LENGTH).fill(null)));
    setRow(0);
    setCol(0);
    setDone(false);
    setShowWin(false);
    setStatus("Guess the word in 6 tries.");
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (showWin && e.key === "Escape") {
        e.preventDefault();
        setShowWin(false);
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
        return;
      }
      if (e.key === "Backspace") {
        e.preventDefault();
        backspace();
        return;
      }
      const k = normalized(e.key);
      if (k.length === 1) pushLetter(k);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [backspace, col, done, pushLetter, row, submit]);

  const keyboard = useMemo(
    () => [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
    ],
    []
  );

  return (
    <div>
      <div className="text-xs text-slate-600">A daily word. No streaks.</div>
      <div className="mt-2 rounded-2xl border border-white/50 bg-white/55 p-3 shadow-sm backdrop-blur">
        <div className="text-xs font-semibold text-slate-700">{status}</div>

        <div className="mt-4 grid gap-2" style={{ gridTemplateRows: `repeat(${MAX_TRIES}, minmax(0,1fr))` }}>
          {Array.from({ length: MAX_TRIES }).map((_, r) => (
            <div key={r} className="mx-auto grid gap-2" style={{ gridTemplateColumns: `repeat(${WORD_LENGTH}, 44px)` }}>
              {Array.from({ length: WORD_LENGTH }).map((__, c) => {
                const ch = board[r][c];
                const ev = evaluations[r][c];
                const filled = Boolean(ch);
                const style = tileStyle(ev, filled);

                return (
                  <div
                    key={c}
                    className={
                      "grid h-11 w-11 place-items-center rounded-lg border text-[18px] font-bold " +
                      (r === row && c === col && !done ? "ring-2 ring-slate-900/10" : "")
                    }
                    style={style}
                  >
                    {ch}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-2">
          <div className="mx-auto w-full max-w-[320px]">
            <div className="flex items-center justify-center gap-1">
              {keyboard[0].map((k) => {
                const ev = keyState[k];
                const style = keyStyle(ev);
                return (
                  <button
                    key={k}
                    type="button"
                    disabled={done}
                    onClick={() => pushLetter(k)}
                    className="h-10 min-w-0 flex-1 rounded-lg border border-white/60 text-[11px] font-semibold shadow-sm backdrop-blur transition disabled:opacity-60 active:scale-[0.99]"
                    style={style}
                  >
                    {k}
                  </button>
                );
              })}
            </div>

            <div className="mt-1 flex items-center justify-center gap-1 px-3">
              {keyboard[1].map((k) => {
                const ev = keyState[k];
                const style = keyStyle(ev);
                return (
                  <button
                    key={k}
                    type="button"
                    disabled={done}
                    onClick={() => pushLetter(k)}
                    className="h-10 min-w-0 flex-1 rounded-lg border border-white/60 text-[11px] font-semibold shadow-sm backdrop-blur transition disabled:opacity-60 active:scale-[0.99]"
                    style={style}
                  >
                    {k}
                  </button>
                );
              })}
            </div>

            <div className="mt-1 flex items-center justify-center gap-1">
              {keyboard[2].map((k) => {
                const isEnter = k === "ENTER";
                const isBack = k === "⌫";
                const ev = keyState[k];
                const style = keyStyle(ev);
                const flex = isEnter || isBack ? 1.6 : 1;

                return (
                  <button
                    key={k}
                    type="button"
                    disabled={done}
                    onClick={() => {
                      if (isEnter) submit();
                      else if (isBack) backspace();
                      else pushLetter(k);
                    }}
                    className="h-10 min-w-0 rounded-lg border border-white/60 text-[11px] font-semibold shadow-sm backdrop-blur transition disabled:opacity-60 active:scale-[0.99]"
                    style={{ ...style, flex }}
                  >
                    {k}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-end">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
          >
            Reset
          </button>
        </div>
      </div>

      {showWin ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/25 p-6">
          <div className="w-full max-w-[360px] rounded-3xl border border-white/55 bg-white/70 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.20)] backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-slate-900">Congratulations!</div>
                <div className="mt-1 text-sm text-slate-600">You found today’s word.</div>
              </div>
              <button
                type="button"
                onClick={() => setShowWin(false)}
                className="shrink-0 rounded-xl border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition active:scale-[0.99]"
              >
                Close
              </button>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={reset}
                className="w-full rounded-2xl border border-white/35 bg-gradient-to-r from-[#0B1F3A] to-[#1E3A8A] px-4 py-3.5 text-center text-sm font-semibold text-white shadow-[0_12px_28px_rgba(30,58,138,0.18)] ring-1 ring-inset ring-white/18 transition hover:brightness-[1.03] active:scale-[0.99]"
              >
                Play again
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function GamesHub() {
  const [tab, setTab] = useState("snake");

  return (
    <Row title="Games">
      <div className="mt-1">
        <Pill selected={tab === "snake"} onClick={() => setTab("snake")}>Snake</Pill>
        <Pill selected={tab === "blocks"} onClick={() => setTab("blocks")}>Blocks</Pill>
        <Pill selected={tab === "word"} onClick={() => setTab("word")}>Daily word</Pill>
      </div>

      <div className="mt-4">
        {tab === "snake" ? <SnakeLite /> : null}
        {tab === "blocks" ? <BlockStacker /> : null}
        {tab === "word" ? <DailyWord /> : null}
      </div>
    </Row>
  );
}
