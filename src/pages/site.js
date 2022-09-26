import React from 'react';

export default function NotFound() {
  if (typeof window !== 'undefined') {
    window.location = '/site/index.html';
  }

  return null;
}