import { flights, Flight } from '../app/data/flightData';

describe('Flight Data Tests', () => {
  it('should have at least one flight', () => {
    expect(flights.length).toBeGreaterThan(0);
  });

  it('each flight should have required properties', () => {
    flights.forEach(flight => {
      expect(flight).toHaveProperty('id');
      expect(flight).toHaveProperty('from');
      expect(flight).toHaveProperty('to');
      expect(flight).toHaveProperty('departureTime');
      expect(flight).toHaveProperty('arrivalTime');
      expect(flight).toHaveProperty('price');
      expect(typeof flight.price).toBe('number');
    });
  });

  it('should have flights with valid dates', () => {
    flights.forEach(flight => {
      const departure = new Date(flight.departureTime);
      const arrival = new Date(flight.arrivalTime);
      
      expect(departure.toString()).not.toBe('Invalid Date');
      expect(arrival.toString()).not.toBe('Invalid Date');
      expect(arrival > departure).toBe(true);
    });
  });

  it('should have flights with positive prices', () => {
    flights.forEach(flight => {
      expect(flight.price).toBeGreaterThan(0);
    });
  });
});
