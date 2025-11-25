# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Azkaar is an Angular 20 + Capacitor mobile application for displaying Islamic daily remembrances (adhkar) for morning, evening, night, and after prayers. The app is designed as a cross-platform mobile application targeting both iOS and Android.

## Development Commands

### Web Development
```bash
npm start                    # Start dev server on 0.0.0.0
npm run build               # Build for development
npm run build:prod          # Build for production
npm test                    # Run unit tests with Karma
```

### Mobile Development
```bash
npm run build:mobile        # Build production + sync to native platforms
npm run cap:sync            # Sync web assets to native platforms
npm run cap:open:ios        # Open iOS project in Xcode
npm run cap:open:android    # Open Android project in Android Studio
npm run cap:run:ios         # Build and run on iOS device/simulator
npm run cap:run:android     # Build and run on Android device/emulator
```

### Important Notes
- Always run `npm run cap:sync` after making changes to native configuration or installing new Capacitor plugins
- Production builds must be created before syncing to mobile platforms for deployment
- The web directory for Capacitor is `dist/azkaar/browser` (defined in capacitor.config.ts)

## Architecture

### Project Structure
- `src/app/components/` - Feature components (home, morning, evening, night, after-swalaat, privacy)
- `src/app/app.routes.ts` - Route configuration with simple path-to-component mappings
- `src/app/app.config.ts` - Application configuration including HammerModule for gesture support
- `capacitor.config.ts` - Capacitor configuration (appId: com.azkaar.app)

### Component Architecture
Each adhkar component (morning, evening, night, after-swalaat) follows a consistent pattern:

1. **Data Model**: `Dhikr` interface with:
   - `arabic`: Arabic text of the remembrance
   - `translation`: English translation
   - `sources`: Array of hadith references and scholarly notes
   - `repetitions`: Number of times to recite

2. **State Management**: Components track:
   - `currentIndex`: Active dhikr being displayed (swipeable)
   - `translationExpanded`: Toggle state for translation cards
   - `sourcesExpanded`: Toggle state for source cards
   - `remainingCounts`: Counter for repetitions per dhikr
   - `showCheckmark`: Completion animation trigger

3. **User Interactions**:
   - Swipe left/right to navigate between adhkar (using HammerJS)
   - Tap repetition circle to count completions
   - Auto-advance to next dhikr when repetitions complete
   - Collapsible translation and source sections

### Key Technical Details

- **Routing**: Uses Angular standalone components with `RouterOutlet` in the root App component
- **Gestures**: HammerJS integrated via `HammerModule` for swipe gestures (swipeleft/swiperight)
- **Styling**: Component-scoped CSS files, no global UI framework
- **Angular Features**: Uses modern Angular 20 syntax including `@for`, `@if`, `@else` control flow
- **Mobile Native**: Capacitor 7 for iOS and Android platform integration

### Data Structure
Adhkar data is hardcoded within component TypeScript files as arrays of `Dhikr` objects. Some entries are commented out (indicated by `// {` blocks) but preserved for potential future use. Each dhikr includes authentic Islamic sources from major hadith collections (Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, etc.).

## Prettier Configuration
- Print width: 100 characters
- Single quotes enabled
- HTML files use Angular parser
