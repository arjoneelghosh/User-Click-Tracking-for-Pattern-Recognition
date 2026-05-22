
# Movie Recommendation Engine

A frontend recommendation prototype that turns movie discovery into a user-facing product flow through browseable cards, genre-based filtering, click-driven recommendation views, and chart-based recommendation feedback.This project is designed as a UI-first exploration of how recommendation behavior can be surfaced to users, rather than as a backend-heavy recommender system. It focuses on interaction, presentation, and explainability at the product layer.

## Live Demo

- https://quiet-mousse-193620.netlify.app/

## Overview

Many recommendation projects stop at backend similarity output or model scores, which makes it hard to understand how recommendations would actually be explored by a user.

This prototype addresses that by building:
- a movie discovery interface with cards and genre filtering
- click-triggered recommendation views
- a chart-based panel that explains why recommendations are being shown
- a product-style flow that makes recommendation behavior easier to inspect

The current implementation should be framed conservatively as a **mock recommendation prototype** with frontend-focused behavior and simulated recommendation scoring.

## Approach

This project builds a lightweight recommendation experience by combining:

- a browse layer with movie cards
- genre-based filtering
- click-based recommendation triggers
- a floating chart panel for visual recommendation feedback
- simple contextual cues such as title, genre, rating, and year

The goal is to make recommendation behavior feel understandable at the interface level, even in prototype form.

## Features

- Responsive movie/content card grid
- Genre-based filtering
- Click-triggered recommendation feedback
- Floating recommendation panel using charts
- Dark themed streaming-style interface
- Toast-based interaction feedback
- Single-page React application with clean component separation
