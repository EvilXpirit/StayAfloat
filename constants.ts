import { 
  Wind, 
  Heart, 
  Quote, 
  BarChart2, 
  BookOpen, 
  Bot, 
  Palette, 
  Music,
  Gamepad2,
  Leaf,
  Anchor,
  Cloud
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Games', href: '#games' },
  // { label: 'Reviews', href: '#reviews' },
];

export const FEATURES = [
  {
    title: 'Breathing Exercises',
    description: 'Guided sessions with calming animations tailored to your needs.',
    icon: Wind,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: '5000+ Affirmations',
    description: 'Personalized positive statements to rewire your mindset.',
    icon: Heart,
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Daily Quotes',
    description: 'Motivational wisdom delivered fresh every morning.',
    icon: Quote,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Mood Tracker',
    description: 'Visualize emotional patterns with beautiful charts.',
    icon: BarChart2,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Gratitude Journal',
    description: 'A safe space to reflect on the good moments.',
    icon: BookOpen,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'AI Companion "Floaty"',
    description: 'Your friendly, supportive guide for wellness conversations.',
    icon: Bot,
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    title: 'Themes & Colors',
    description: 'Unlock stunning themes and gradients as you progress.',
    icon: Palette,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Sleep Sounds',
    description: 'Binaural beats and ambient environments for deep rest.',
    icon: Music,
    color: 'bg-slate-100 text-slate-600',
  },
];

export const GAMES = [
  {
    id: 1,
    title: 'Floaty Drift',
    description: 'Drift through the skies in this relaxing endless runner. Avoid storm clouds or play in Zen Mode for pure relaxation.',
    icon: Cloud,
    color: 'from-sky-400 to-blue-500',
    tags: ['Focus', 'Relaxation']
  },
  {
    id: 2,
    title: 'Uplift',
    description: 'Catch falling positive words while dodging negativity. A light, joyful way to boost your mood.',
    icon: Gamepad2,
    color: 'from-yellow-400 to-orange-500',
    tags: ['Mood Boost', 'Fun']
  },
  {
    id: 3,
    title: 'Ground Me',
    description: 'Interactive 5-4-3-2-1 technique helper. Quickly reduce anxiety by connecting with your senses.',
    icon: Anchor,
    color: 'from-emerald-400 to-teal-500',
    tags: ['Anxiety Relief', 'Tool']
  },
  {
    id: 4,
    title: 'CalmGarden',
    description: 'Plant positive thoughts and watch them grow. A visual metaphor for nurturing your mind.',
    icon: Leaf,
    color: 'from-lime-400 to-green-500',
    tags: ['Visualization', 'Growth']
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Daily User",
    text: "I've tried so many meditation apps, but StayAfloat feels different. It's not just a tool; it feels like a friend. The mood tracker has helped me understand my triggers.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Marcus Chen",
    role: "Student",
    text: "The 'Ground Me' mini-app is a lifesaver during exam stress. I can literally feel my heart rate go down when I use it.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Elena Rodriguez",
    role: "Yoga Instructor",
    text: "I love the gamification aspect. Earning points for taking care of my mental health makes self-care feel rewarding rather than a chore.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];