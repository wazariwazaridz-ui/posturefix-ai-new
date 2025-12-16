# PostureFix AI - Progressive Web App

A Progressive Web App for real-time posture correction using on-device AI with MediaPipe Pose detection. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

**To deploy your website and make it live, please go to the **Publish tab** where you can publish your project with one click. The Publish tab will handle all deployment processes automatically and provide you with the live website URL.**

## ✨ Features

- 🎯 **Real-time Posture Detection** - Instant AI-powered analysis using MediaPipe Pose
- 📱 **Progressive Web App** - Installable, works offline, mobile-optimized
- 🎨 **Visual Feedback** - Color-coded landmarks and posture scoring
- 💪 **Personalized Exercises** - Custom recommendations based on your posture
- 📊 **Progress Tracking** - History and analytics with charts
- 🔒 **Privacy First** - All processing happens on your device
- 🌙 **Dark/Light Mode** - Automatic theme switching
- 🔔 **Smart Reminders** - Customizable posture check reminders
- 💰 **Monetization** - Premium upgrade system with ads for free users

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **AI**: MediaPipe Pose (on-device)
- **PWA**: Workbox + Service Worker
- **Charts**: Chart.js
- **Database**: Bolt Database (RESTful API)
- **Build**: Vite
- **Deployment**: Static hosting (Vercel/Netlify)

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn
- Modern browser with WebRTC support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AdBanner/     # Advertisement banner
│   ├── Camera/       # Camera component
│   ├── PoseDetector/ # AI pose detection
│   └── common/       # Common components
├── contexts/         # React contexts
│   ├── PremiumContext.tsx     # Premium subscription
│   └── ServiceWorkerContext.tsx # PWA service worker
├── data/             # Static data
│   └── exercises.ts  # Exercise database
├── pages/            # Page components
│   ├── History.tsx   # Scan history
│   ├── Results.tsx     # Analysis results
│   ├── Scan.tsx        # Posture scanning
│   ├── Settings.tsx    # App settings
│   └── Welcome.tsx     # Onboarding
├── routes/           # Route definitions
├── services/         # Business logic
│   └── postureService.ts # Data persistence
├── types/            # TypeScript types
│   └── posture.ts    # Type definitions
├── App.tsx           # Main app component
├── main.tsx          # App entry point
└── sw.ts            # Service worker
```

## 🎯 Core Features Implementation

### ✅ Completed
- [x] Project structure with Vite + React + TypeScript + Tailwind CSS
- [x] PWA configuration with offline support
- [x] Camera integration with MediaPipe Pose
- [x] Real-time pose analysis and visual feedback
- [x] Posture scoring algorithm
- [x] Exercise recommendations based on issues
- [x] History tracking with progress charts
- [x] Premium upgrade system
- [x] Responsive mobile-first design

### 🚧 In Progress
- [ ] Advanced analytics dashboard
- [ ] Push notifications
- [ ] Exercise video demonstrations
- [ ] Social sharing features

### 📋 Planned
- [ ] Multi-language support
- [ ] Advanced pose analysis
- [ ] Integration with fitness apps
- [ ] Community features

## 🔧 Configuration

### PWA Settings
Edit `vite.config.ts` to configure:
- App name and description
- Icons and splash screens
- Offline behavior
- Update strategies

### Database Schema
The app uses Bolt Database with these tables:
- `posture_scans` - Stores scan results
- `users` - User accounts and preferences

### Exercise Database
Located in `src/data/exercises.ts`:
- 15+ exercises with detailed instructions
- Difficulty levels (beginner, intermediate, advanced)
- Target areas and issue mappings

## 📊 API Endpoints

```
GET    /tables/posture_scans              # List all scans
GET    /tables/posture_scans/:id          # Get specific scan
POST   /tables/posture_scans               # Create new scan
PUT    /tables/posture_scans/:id          # Update scan
DELETE /tables/posture_scans/:id          # Delete scan

GET    /tables/users                      # List users
POST   /tables/users                       # Create user
```

## 🎨 Styling

Uses Tailwind CSS with custom theme:
- Primary colors: Blue palette
- Success: Green palette
- Warning: Orange palette
- Error: Red palette

Custom components available:
- `.btn-primary`, `.btn-success`, `.btn-warning`, `.btn-error`
- `.card` for content containers
- `.input` for form fields

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly UI components
- Safe area support for notched devices
- Camera optimization for mobile
- Offline functionality

## 🔒 Privacy & Security

- All AI processing happens on-device
- No images sent to external servers
- Local data storage by default
- Optional cloud sync with user consent
- GDPR compliant

## 🚀 Deployment

### Static Hosting (Recommended)
Deploy to Vercel, Netlify, or similar:

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure custom domain if needed

### Environment Variables
Create `.env` file:
```
VITE_API_URL=https://your-api-endpoint.com
VITE_APP_NAME=PostureFix AI
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Test PWA functionality
npm run preview
# Open in browser and test:
# - Install prompt
# - Offline mode
# - Camera permissions
```

## 📈 Performance

Targets:
- Initial load: < 3s on 3G
- Time to interactive: < 5s
- Lighthouse score: > 90
- Bundle size: < 500KB (gzipped)

## 🐛 Troubleshooting

### Camera Issues
- Check browser permissions
- Ensure HTTPS (required for camera)
- Try different browsers
- Check device-specific settings

### PWA Issues
- Clear browser cache
- Check service worker registration
- Verify manifest.json validity
- Test in incognito mode

### Build Issues
- Clear node_modules and reinstall
- Check Node.js version compatibility
- Verify TypeScript types

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check the troubleshooting section
2. Review the GitHub issues
3. Create a new issue with detailed information

## 🎉 Acknowledgments

- MediaPipe team for pose detection
- React community for excellent libraries
- Tailwind CSS for styling framework
- Chart.js for data visualization