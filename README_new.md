# COVID-19 Tracker

A comprehensive COVID-19 tracking dashboard built with React that provides real-time statistics, interactive charts, and global data visualization for monitoring the pandemic's impact worldwide.

## Features

### 📊 Real-time Statistics
- **Global COVID-19 Data**: Live tracking of confirmed cases, recoveries, and deaths worldwide
- **Ghana-specific Data**: Dedicated tracking for Ghana with local statistics
- **Animated Counters**: Smooth counting animations for statistical displays using CountUp

### 📈 Interactive Charts
- **Bar Charts**: Visual representation of cases, recoveries, and deaths
- **Multiple Chart Types**: Support for Bar, Line, Pie, and Bubble charts using Chart.js
- **Responsive Design**: Charts adapt to different screen sizes

### 🗺️ Interactive Maps
- **Global Mapping**: Interactive world map powered by Mapbox GL
- **Geographic Visualization**: COVID-19 data plotted on interactive maps
- **Location-based Data**: Detailed information for specific regions

### 🌍 Country-wise Data
- **Comprehensive Country List**: Browse COVID-19 statistics for all countries
- **Search Functionality**: Find specific countries quickly
- **Detailed Cards**: Individual country cards with complete statistics

## Technology Stack

- **Frontend**: React 17.0.2
- **Charts**: Chart.js 3.4.1 with React-ChartJS-2
- **Maps**: Mapbox GL 2.3.1 with React-Map-GL
- **Styling**: Bootstrap 5.0.2 + React Bootstrap
- **HTTP Client**: Axios for API requests
- **Routing**: React Router DOM
- **Icons**: FontAwesome React

## Data Sources

- **Global Data**: Multiple COVID-19 APIs including corona.lmao.ninja
- **Ghana Data**: mazitekgh.com COVID-19 API
- **Recovery Data**: covid19.mathdro.id API

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/neweracy/covtracker.git
cd covtracker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Available Scripts

### `npm start` or `yarn start`
Runs the app in development mode. The page will reload when you make edits.

### `npm test` or `yarn test`
Launches the test runner in interactive watch mode.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder with optimized performance.

### `npm run eject` or `yarn eject`
**Note: This is a one-way operation!** Ejects from Create React App for full configuration control.

## Project Structure

```
src/
├── components/
│   ├── charts/          # Chart components and visualizations
│   ├── countries/       # Country-wise data display
│   ├── ghana/          # Ghana-specific COVID data
│   ├── map/            # Interactive map components
│   ├── nav/            # Navigation components
│   └── sam/            # Main dashboard component
├── App.js              # Main application component
└── index.js           # Application entry point
```

## Features Overview

### Dashboard (`sam` component)
- Real-time global and Ghana-specific COVID-19 statistics
- Animated counters for visual appeal
- Clean, responsive design

### Charts Section
- Interactive bar charts showing cases, recoveries, and deaths
- Responsive design with Chart.js integration
- Real-time data updates

### Maps Section
- Interactive world map with COVID-19 data overlay
- Powered by Mapbox GL for smooth interactions
- Geographic data visualization

### Countries Section
- Searchable list of all countries with COVID-19 data
- Individual country cards with detailed statistics
- Bootstrap-styled responsive cards

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the terms specified in the LICENSE file.

## Disclaimer

This application uses third-party APIs for COVID-19 data. Data accuracy depends on the reliability of these sources. Always refer to official health organization websites for the most current and accurate information.
