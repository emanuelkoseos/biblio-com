import React from "react"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Site() {
    if (typeof window !== 'undefined') {
        // redirect after 1sec
        //window.setTimeout(function() {
          window.location.pathname = '/site/index.html'
        //}, 1000)
      }
    return null;

}

