// Demo Data Accessor
// Provides mock data for the Percy's Place demo
// All functions return promises to simulate async data fetching

import featuredTripsData from './featured_trips.json';
import seasonalTripsData from './seasonal_trips.json';
import interestsData from './interests.json';
import itineraryTemplate from './itinerary_template.json';
import historicMarkersData from './historic_markers_mock.json';
import photoSpotsData from './photo_spots_mock.json';

// Simulate network delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Featured Trips
export async function getFeaturedTrips() {
  await delay();
  return featuredTripsData;
}

export async function getFeaturedTripById(id) {
  await delay();
  return featuredTripsData.find(trip => trip.id === id) || null;
}

// Seasonal Trips
export async function getSeasonalTrips(season = null) {
  await delay();
  if (season) {
    return seasonalTripsData.filter(trip => trip.season === season);
  }
  return seasonalTripsData;
}

export async function getCurrentSeasonalTrip() {
  await delay();
  const month = new Date().getMonth() + 1;
  let season;
  if (month >= 3 && month <= 5) season = 'spring';
  else if (month >= 6 && month <= 8) season = 'summer';
  else if (month >= 9 && month <= 11) season = 'fall';
  else season = 'winter';
  
  return seasonalTripsData.find(trip => trip.season === season) || seasonalTripsData[0];
}

// Interests
export async function getInterests() {
  await delay(150);
  return interestsData;
}

export async function getInterestById(id) {
  await delay(150);
  return interestsData.find(interest => interest.id === id) || null;
}

// Itinerary Template
export async function getItineraryTemplate() {
  await delay();
  return itineraryTemplate;
}

// Historic Markers
export async function getHistoricMarkers(bounds = null) {
  await delay();
  if (bounds) {
    return historicMarkersData.filter(marker => 
      marker.location.lat >= bounds.south && 
      marker.location.lat <= bounds.north &&
      marker.location.lng >= bounds.west && 
      marker.location.lng <= bounds.east
    );
  }
  return historicMarkersData;
}

export async function getHistoricMarkerById(id) {
  await delay();
  return historicMarkersData.find(marker => marker.id === id) || null;
}

export async function getMarkersByTags(tags) {
  await delay();
  if (!tags || tags.length === 0) return historicMarkersData;
  return historicMarkersData.filter(marker => 
    tags.some(tag => marker.tags.includes(tag))
  );
}

// Photo Spots
export async function getPhotoSpots(filters = {}) {
  await delay();
  let spots = [...photoSpotsData];
  
  if (filters.type) {
    spots = spots.filter(spot => spot.type === filters.type);
  }
  if (filters.difficulty) {
    spots = spots.filter(spot => spot.difficulty === filters.difficulty);
  }
  if (filters.bounds) {
    spots = spots.filter(spot => 
      spot.location.lat >= filters.bounds.south && 
      spot.location.lat <= filters.bounds.north &&
      spot.location.lng >= filters.bounds.west && 
      spot.location.lng <= filters.bounds.east
    );
  }
  
  return spots;
}

export async function getPhotoSpotById(id) {
  await delay();
  return photoSpotsData.find(spot => spot.id === id) || null;
}

// Demo Route Preset
export function getDemoRoutePreset() {
  return {
    id: 'demo-cape-charles-dc',
    name: 'Cape Charles to Washington, DC',
    startLocation: {
      name: 'Cape Charles, VA',
      lat: 37.2678,
      lng: -76.0176
    },
    endLocation: {
      name: 'Washington, DC',
      lat: 38.9072,
      lng: -77.0369
    },
    suggestedInterests: ['scenic-views', 'historic-sites', 'local-flavor', 'photo-stops'],
    estimatedDuration: '4-5 hours',
    estimatedDistance: '220 miles',
    description: 'A scenic coastal route through the Eastern Shore, across the Chesapeake Bay Bridge, and into the nation\'s capital.',
    highlights: ['Chesapeake Bay Bridge', 'Annapolis', 'U.S. Route 50 scenic byway']
  };
}

// Trip Generation (AI Concierge Mock)
export async function generateTripItinerary({
  startLocation,
  endLocation,
  startDate,
  endDate,
  interests = [],
  duration = 'weekend'
}) {
  await delay(800); // Simulate AI processing
  
  const template = await getItineraryTemplate();
  const allMarkers = await getHistoricMarkers();
  const allPhotoSpots = await getPhotoSpots();
  
  // Simple mock logic: filter stops by interests and route proximity
  const relevantMarkers = allMarkers.slice(0, Math.min(interests.length + 2, allMarkers.length));
  const relevantPhotoSpots = allPhotoSpots.slice(0, Math.min(interests.length + 1, allPhotoSpots.length));
  
  const tripId = `trip-${Date.now()}`;
  const tripTitle = `${startLocation.name} to ${endLocation.name}`;
  
  return {
    id: tripId,
    title: tripTitle,
    subtitle: `A ${duration} journey through scenic Virginia and Maryland`,
    startLocation,
    endLocation,
    startDate,
    endDate,
    duration,
    interests,
    itinerary: template.days.map((day, index) => ({
      ...day,
      dayNumber: index + 1,
      stops: [
        ...relevantMarkers.slice(index, index + 2).map(m => ({
          type: 'historic-marker',
          name: m.name,
          id: m.id,
          visited: false
        })),
        ...relevantPhotoSpots.slice(index, index + 1).map(p => ({
          type: 'photo-spot',
          name: p.name,
          id: p.id,
          visited: false
        }))
      ].filter(Boolean)
    })),
    historicMarkers: relevantMarkers,
    photoSpots: relevantPhotoSpots,
    createdAt: new Date().toISOString(),
    status: 'upcoming'
  };
}

// LocalStorage Helpers for Demo State
export function saveTripToLocal(trip) {
  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('percy_trips') || '[]');
    existing.push(trip);
    localStorage.setItem('percy_trips', JSON.stringify(existing));
  }
}

export function getTripsFromLocal() {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('percy_trips') || '[]');
  }
  return [];
}

export function saveInterestsToLocal(interests) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('percy_interests', JSON.stringify(interests));
  }
}

export function getInterestsFromLocal() {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('percy_interests') || '[]');
  }
  return [];
}

export function clearDemoData() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('percy_trips');
    localStorage.removeItem('percy_interests');
  }
}

// Achievement System
export const ACHIEVEMENTS = [
  {
    id: 'weekend-explorer',
    name: 'Weekend Explorer',
    description: 'Complete your first weekend trip',
    icon: 'compass',
    threshold: { type: 'trips_completed', count: 1 }
  },
  {
    id: 'scenic-collector',
    name: 'Scenic Collector',
    description: 'Visit 5 photo spots',
    icon: 'camera',
    threshold: { type: 'photo_spots_visited', count: 5 }
  },
  {
    id: 'history-hunter',
    name: 'History Hunter',
    description: 'Discover 10 historic markers',
    icon: 'landmark',
    threshold: { type: 'markers_visited', count: 10 }
  },
  {
    id: 'long-weekend',
    name: 'Long Weekender',
    description: 'Complete a 3+ day trip',
    icon: 'calendar',
    threshold: { type: 'trip_duration', days: 3 }
  },
  {
    id: 'interests-diverse',
    name: 'Renaissance Traveler',
    description: 'Select 5+ interests',
    icon: 'star',
    threshold: { type: 'interests_selected', count: 5 }
  }
];

export function checkAchievements(progress) {
  return ACHIEVEMENTS.filter(achievement => {
    const { threshold } = achievement;
    switch (threshold.type) {
      case 'trips_completed':
        return progress.tripsCompleted >= threshold.count;
      case 'photo_spots_visited':
        return progress.photoSpotsVisited >= threshold.count;
      case 'markers_visited':
        return progress.markersVisited >= threshold.count;
      case 'trip_duration':
        return progress.maxTripDays >= threshold.days;
      case 'interests_selected':
        return progress.interestsSelected >= threshold.count;
      default:
        return false;
    }
  });
}

// Utility: Generate a scrapbook from a trip
export function generateScrapbook(trip) {
  const markersSeen = trip.historicMarkers?.slice(0, Math.ceil(trip.historicMarkers.length * 0.7)) || [];
  const markersMissed = trip.historicMarkers?.slice(Math.ceil(trip.historicMarkers.length * 0.7)) || [];
  const photosTaken = trip.photoSpots?.slice(0, Math.ceil(trip.photoSpots.length * 0.6)) || [];
  
  return {
    tripId: trip.id,
    title: trip.title,
    dates: { start: trip.startDate, end: trip.endDate },
    cover: {
      title: trip.title,
      dates: `${trip.startDate} - ${trip.endDate}`,
      image: trip.itinerary?.[0]?.stops?.[0]?.image || '/images/scrapbook/default-cover.jpg'
    },
    collage: {
      markersVisited: markersSeen,
      photoSpots: photosTaken,
      highlights: [
        `Explored ${markersSeen.length} historic sites`,
        `Captured ${photosTaken.length} photo memories`,
        `Traveled ${trip.itinerary?.length || 1} days through scenic routes`
      ]
    },
    seenAndMissed: {
      seen: markersSeen,
      missed: markersMissed
    },
    achievements: checkAchievements({
      tripsCompleted: 1,
      markersVisited: markersSeen.length,
      photoSpotsVisited: photosTaken.length,
      maxTripDays: trip.itinerary?.length || 1
    }),
    generatedAt: new Date().toISOString()
  };
}
