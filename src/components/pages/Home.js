import React from 'react'

export default function Home() {
    return (
        <div className='container'>
            <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4 white">Star Wars</h1>
                <p class="lead white">A small React App that displays data fetched from the star wars api.
                Select one of the above categories to get started!!</p>
                <p class="lead white">Tech Stack : </p>
            </div>
            <div class="card-deck mb-3 text-center">
                <div class="card bg-warning mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal card-title">Axios</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-text">Promise based HTTP client for the browser and node.js</h5>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Wide Browser Support</li>
                            <li>Easy to use</li>
                            <li>Promise Based</li>
                        </ul>
                    </div>
                </div>
                <div class="card bg-warning mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">React</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-text">Most Popular Frontend Framework for creating web apps</h5>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Component Based</li>
                            <li>Easy to maintain</li>
                            <li>Stable Code</li>
                            <li>Good Community Support</li>
                        </ul>
                    </div>
                </div>
                <div class="card bg-warning mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Bootstrap</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-text">The world’s most popular front-end open source toolkit</h5>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Powerful</li>
                            <li>Responsive</li>
                            <li>Open Source</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
