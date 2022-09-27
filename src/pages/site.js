import React from "react"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Site() {
    if (typeof window !== 'undefined') {
          window.location.href = '/site/index.html';
      }
    return
}


