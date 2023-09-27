import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
  return (
    <aside className="col-3 g_border">
            <ul class="nav flex-column">
              <li class="nav-item g_bg-blue m-1">
                <Link class="nav-link g_color_white active" aria-current="page" href="/flight">The Flight</Link>
              </li>
              <li class="nav-item g_bg-blue m-1">
                <Link class="nav-link g_color_white" href="/city">The City</Link>
              </li>
              <li class="nav-item g_bg-blue m-1">
                <Link class="nav-link g_color_white" href="/island">The IsLand</Link>
              </li>
              <li class="nav-item g_bg-blue m-1">
                <Link class="nav-link g_color_white" href="/food">The Food</Link>
              </li>
            </ul>
        </aside>
  )
}
