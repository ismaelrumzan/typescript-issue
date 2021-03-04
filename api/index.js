const app = require('express')();
const { nanoid } = require('nanoid');

const API = '/api';
const TODO = 'todo';

/**
 * Get todos based on filters
 *
 * Filters:
 */
app.get(`${API}/${TODO}`, (req, res) => {
  res.json({ id: nanoid() });
});

/**
 * Get a specific todo
 *
 * Filters: none
 */
app.get(`${API}/${TODO}/:id`, (req, res) => {
  res.json({ id: nanoid() });
});

module.exports = app;
