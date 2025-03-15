
export type TranslationKey = 
  | 'title'
  | 'subtitle'
  | 'emailPlaceholder'
  | 'getEarlyAccess'
  | 'privacyNotice'
  | 'launchingIn'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'seconds'
  | 'whyFreelo'
  | 'whyFreeloSubtitle'
  | 'advancedEventDiscovery'
  | 'advancedEventDiscoveryDesc'
  | 'communityMemberships'
  | 'communityMembershipsDesc'
  | 'eventCalendar'
  | 'eventCalendarDesc'
  | 'joinCommunity'
  | 'joinCommunityDesc'
  | 'telegramLink'
  | 'membersCount'
  | 'ourNumbers'
  | 'ourNumbersDesc'
  | 'communityMembers'
  | 'eventOrganizers'
  | 'eventsPostedLastYear'
  | 'discoverEvents'
  | 'discoverEventsDesc'
  | 'eventType1'
  | 'eventType2'
  | 'eventType3'
  | 'eventType4'
  | 'eventType5'
  | 'eventType6'
  | 'eventType7'
  | 'eventType8'
  | 'findPerfectEvents'
  | 'findPerfectEventsDesc'
  | 'questionLabel'
  | 'previous'
  | 'next'
  | 'finish'
  | 'thankYou'
  | 'thankYouDesc'
  | 'close'
  | 'keyBenefits'
  | 'keyBenefitsDesc'
  | 'verifiedSafety'
  | 'verifiedSafetyDesc'
  | 'smartDiscovery'
  | 'smartDiscoveryDesc'
  | 'inclusiveCommunity'
  | 'inclusiveCommunityDesc'
  | 'worldwideEvents'
  | 'worldwideEventsDesc'
  | 'privacyFocused'
  | 'privacyFocusedDesc'
  | 'realTimeUpdates'
  | 'realTimeUpdatesDesc'
  | 'commonQuestions'
  | 'commonQuestionsDesc'
  | 'q1'
  | 'a1'
  | 'q2'
  | 'a2'
  | 'q3'
  | 'a3'
  | 'q4'
  | 'a4'
  | 'q5'
  | 'a5'
  | 'moreQuestionsText'
  | 'getInTouch'
  | 'getInTouchDesc'
  | 'telegram'
  | 'email'
  | 'copyrightText';

type Translations = {
  [key in TranslationKey]: {
    he: string;
    en: string;
  }
};

export const translations: Translations = {
  title: {
    he: "פרילו היא הפלטפורמה שמאחדת אירועים אינטימיים ואלטרנטיביים",
    en: "FREELO is where intimate & alternative events unite"
  },
  subtitle: {
    he: "הפלטפורמה המקיפה לגילוי והצטרפות לאירועי פוליאמוריה, BDSM, סווינגרים, פסטיבלים ומסיבות פרטיות",
    en: "Your one-stop platform for discovering and joining the most exclusive polyamory, BDSM, swinger events, festivals, and private parties."
  },
  emailPlaceholder: {
    he: "הזינו את כתובת האימייל שלכם",
    en: "Enter your email"
  },
  getEarlyAccess: {
    he: "קבלו גישה מוקדמת",
    en: "Get Early Access"
  },
  privacyNotice: {
    he: "אנו מכבדים את פרטיותכם ולעולם לא נשתף את המידע שלכם.",
    en: "We respect your privacy and will never share your information."
  },
  launchingIn: {
    he: "משיקים בעוד",
    en: "Launching in"
  },
  days: {
    he: "ימים",
    en: "Days"
  },
  hours: {
    he: "שעות",
    en: "Hours"
  },
  minutes: {
    he: "דקות",
    en: "Minutes"
  },
  seconds: {
    he: "שניות",
    en: "Seconds"
  },
  whyFreelo: {
    he: "למה להצטרף לפרילו?",
    en: "Why join Freelo?"
  },
  whyFreeloSubtitle: {
    he: "הפלטפורמה שמחברת אותך לקהילה ולאירועים שמתאימים לרצונות שלך",
    en: "The platform that connects you to the community and events that match your desires"
  },
  advancedEventDiscovery: {
    he: "גילוי אירועים מתקדם",
    en: "Advanced Event Discovery"
  },
  advancedEventDiscoveryDesc: {
    he: "מצאו אירועים שמתאימים בדיוק לתחומי העניין וההעדפות שלכם.",
    en: "Find events that perfectly match your interests and preferences."
  },
  communityMemberships: {
    he: "חברות בקהילה",
    en: "Community Memberships"
  },
  communityMembershipsDesc: {
    he: "התחברו עם אנשים בעלי תפיסות דומות בקהילות בלעדיות.",
    en: "Connect with like-minded individuals in exclusive communities."
  },
  eventCalendar: {
    he: "לוח אירועים מקיף",
    en: "Comprehensive Event Calendar"
  },
  eventCalendarDesc: {
    he: "מסיבות, סדנאות, מפגשים ועוד - הכל במקום אחד.",
    en: "Parties, workshops, meetups, and more all in one place."
  },
  joinCommunity: {
    he: "הצטרפו לקהילה",
    en: "Join the Community"
  },
  joinCommunityDesc: {
    he: "התחברו עם אלפי אנשים בעלי תפיסות דומות. ערוץ הטלגרם שלנו כבר מחבר בין אנשים.",
    en: "Connect with thousands of like-minded individuals. Our Telegram channel is already bringing people together."
  },
  telegramLink: {
    he: "הצטרפו לקהילת הטלגרם שלנו",
    en: "Join Our Telegram Community"
  },
  membersCount: {
    he: "מעל 3,000 חברים וגדלים מידי יום",
    en: "Over 3,000 members and growing daily"
  },
  ourNumbers: {
    he: "המספרים שלנו",
    en: "Our Numbers"
  },
  ourNumbersDesc: {
    he: "אלפי חיבורים שכבר נוצרו דרך הרשת שלנו",
    en: "Thousands of connections already made through our network"
  },
  communityMembers: {
    he: "חברי קהילה",
    en: "Community Members"
  },
  eventOrganizers: {
    he: "מארגני אירועים",
    en: "Event Organizers"
  },
  eventsPostedLastYear: {
    he: "אירועים שפורסמו בשנה האחרונה",
    en: "Events Posted Last Year"
  },
  discoverEvents: {
    he: "גלו אירועים עבורכם",
    en: "Discover Events For You"
  },
  discoverEventsDesc: {
    he: "אנו אוצרים מגוון רחב של האירועים המרגשים ביותר בקהילה",
    en: "We curate a wide variety of the most exciting events in the community"
  },
  eventType1: {
    he: "מסיבות סווינגרים",
    en: "Swinger Parties"
  },
  eventType2: {
    he: "מסיבות BDSM",
    en: "BDSM Play Parties"
  },
  eventType3: {
    he: "אורגיות",
    en: "Orgies"
  },
  eventType4: {
    he: "מפגשי פוליאמוריה",
    en: "Polyamory Meetups"
  },
  eventType5: {
    he: "פסטיבלים מיניים חיוביים",
    en: "Sex-Positive Festivals"
  },
  eventType6: {
    he: "סדנאות טנטרה",
    en: "Tantra Workshops"
  },
  eventType7: {
    he: "אירועי חינוך קינקי",
    en: "Kink Education Events"
  },
  eventType8: {
    he: "התכנסויות פרטיות",
    en: "Private Home Gatherings"
  },
  findPerfectEvents: {
    he: "מצאו את האירועים המושלמים עבורכם",
    en: "Find Your Perfect Events"
  },
  findPerfectEventsDesc: {
    he: "ענו על מספר שאלות קצרות כדי לעזור לנו להתאים את המלצות האירועים שלכם",
    en: "Answer a few quick questions to help us customize your event recommendations"
  },
  questionLabel: {
    he: "שאלה",
    en: "Question"
  },
  previous: {
    he: "הקודם",
    en: "Previous"
  },
  next: {
    he: "הבא",
    en: "Next"
  },
  finish: {
    he: "סיום",
    en: "Finish"
  },
  thankYou: {
    he: "תודה רבה!",
    en: "Thank you!"
  },
  thankYouDesc: {
    he: "התשובות שלך יעזרו לנו להתאים אירועים מושלמים בשבילך.",
    en: "Your responses will help us tailor the perfect events for you."
  },
  close: {
    he: "סגור",
    en: "Close"
  },
  keyBenefits: {
    he: "יתרונות מרכזיים",
    en: "Key Benefits"
  },
  keyBenefitsDesc: {
    he: "גלו מה הופך את פרילו לפלטפורמה האולטימטיבית לאירועים אלטרנטיביים",
    en: "Discover what makes Freelo the ultimate platform for alternative events"
  },
  verifiedSafety: {
    he: "בטיחות מאומתת",
    en: "Verified Safety"
  },
  verifiedSafetyDesc: {
    he: "כל האירועים והמארגנים נבדקים ביסודיות לבטיחות ואמינות.",
    en: "All events and organizers are thoroughly vetted for safety and trustworthiness."
  },
  smartDiscovery: {
    he: "גילוי חכם",
    en: "Smart Discovery"
  },
  smartDiscoveryDesc: {
    he: "האלגוריתם שלנו עוזר לכם למצוא אירועים המותאמים לתחומי העניין הספציפיים שלכם.",
    en: "Our algorithm helps you find events tailored to your specific interests."
  },
  inclusiveCommunity: {
    he: "קהילה מכילה",
    en: "Inclusive Community"
  },
  inclusiveCommunityDesc: {
    he: "סביבה מזמינה לכל הזהויות, האוריינטציות וסגנונות היחסים.",
    en: "A welcoming environment for all identities, orientations, and relationship styles."
  },
  worldwideEvents: {
    he: "אירועים בכל העולם",
    en: "Worldwide Events"
  },
  worldwideEventsDesc: {
    he: "גישה לאירועים מקומיים ובינלאומיים בערים מרכזיות.",
    en: "Access to local and international events across major cities."
  },
  privacyFocused: {
    he: "מיקוד בפרטיות",
    en: "Privacy Focused"
  },
  privacyFocusedDesc: {
    he: "המידע האישי שלכם נשאר מאובטח ולעולם לא משותף ללא הרשאה.",
    en: "Your personal information remains secure and never shared without permission."
  },
  realTimeUpdates: {
    he: "עדכונים בזמן אמת",
    en: "Real-time Updates"
  },
  realTimeUpdatesDesc: {
    he: "התראות מיידיות על אירועים חדשים התואמים את ההעדפות שלכם.",
    en: "Instant notifications about new events matching your preferences."
  },
  commonQuestions: {
    he: "שאלות נפוצות",
    en: "Common Questions"
  },
  commonQuestionsDesc: {
    he: "מצאו תשובות לשאלות הנפוצות ביותר",
    en: "Find answers to the most frequently asked questions"
  },
  q1: {
    he: "איך אני יודע/ת שהפרטיות שלי מוגנת?",
    en: "How do I know my privacy is protected?"
  },
  a1: {
    he: "אנחנו מתייחסים לפרטיות ברצינות רבה. המידע האישי שלכם מוצפן ולעולם לא משותף עם מארגני אירועים ללא הסכמה מפורשת שלכם. אתם שולטים במידע שנראה לאחרים, ולפלטפורמה שלנו יש הנחיות קפדניות נגד צילום והקלטה באירועים.",
    en: "We take privacy extremely seriously. Your personal information is encrypted and never shared with event organizers without your explicit consent. You control what information is visible to others, and our platform has strict guidelines against photography and recording at events."
  },
  q2: {
    he: "איך אני יכול/ה להצטרף לאירועים פרטיים?",
    en: "How can I join private events?"
  },
  a2: {
    he: "אירועים פרטיים דורשים אישור מהמארגנים. לאחר בניית הפרופיל שלכם, תוכלו לבקש גישה לאירועים פרטיים. למארגנים יכול להיות תהליך בדיקה משלהם, שיכול לכלול בקשה קצרה או ראיון כדי להבטיח התאמה טובה עם הקהילה שלהם.",
    en: "Private events require approval from the organizers. Once you build your profile, you can request access to private events. Organizers may have their own vetting process, which can include a brief application or interview to ensure a good fit with their community."
  },
  q3: {
    he: "איך אני מוצא/ת אירועים שמתאימים לתחומי העניין שלי?",
    en: "How do I find events that match my interests?"
  },
  a3: {
    he: "הפלטפורמה שלנו משתמשת באלגוריתם התאמה מתקדם המבוסס על תחומי העניין, ההעדפות והקשרים הקהילתיים שלכם. לאחר מילוי השאלון המותאם אישית שלנו, תקבלו המלצות מותאמות. תוכלו גם להשתמש במסננים מפורטים כדי לחפש סוגים ספציפיים של אירועים.",
    en: "Our platform uses an advanced matching algorithm based on your interests, preferences, and community connections. After completing our personalized questionnaire, you'll receive tailored recommendations. You can also use detailed filters to search for specific types of events."
  },
  q4: {
    he: "האם פרילו מיועד רק לאנשים מנוסים?",
    en: "Is Freelo only for experienced people?"
  },
  a4: {
    he: "ממש לא! פרילו מקבלת בברכה אנשים בכל רמות הניסיון. אירועים רבים מתוכננים במיוחד למתחילים, כולל סדנאות חינוכיות ומפגשים חברתיים ידידותיים למתחילים. תיאורי האירועים המקיפים שלנו מציינים בבירור את רמת הניסיון המומלצת לכל אירוע.",
    en: "Not at all! Freelo welcomes people at all experience levels. Many events are specifically designed for newcomers, including educational workshops and beginner-friendly socials. Our comprehensive event descriptions clearly indicate the experience level recommended for each event."
  },
  q5: {
    he: "אילו אמצעי בטיחות קיימים?",
    en: "What safety measures are in place?"
  },
  a5: {
    he: "הבטיחות היא העדיפות העליונה שלנו. כל האירועים והמארגנים עוברים אימות יסודי. האירועים חייבים להיות בעלי מדיניות הסכמה ברורה, פרוטוקולי בטיחות ואנשי בטיחות ייעודיים. אנו מספקים גם דירוגים וביקורות קהילתיות כדי לעזור לכם לקבל החלטות מושכלות לגבי אילו אירועים להשתתף.",
    en: "Safety is our top priority. All events and organizers undergo thorough verification. Events must have clear consent policies, safety protocols, and designated safety personnel. We also provide community ratings and reviews to help you make informed decisions about which events to attend."
  },
  moreQuestionsText: {
    he: "יש לכם עוד שאלות? אנחנו כאן לעזור - פנו לצוות שלנו לקבלת סיוע אישי.",
    en: "Have more questions? We're here to help - reach out to our team for personalized assistance."
  },
  getInTouch: {
    he: "צרו קשר",
    en: "Get In Touch"
  },
  getInTouchDesc: {
    he: "שאלות, הזדמנויות לשיתוף פעולה, או הצעות? צרו איתנו קשר.",
    en: "Questions, partnership opportunities, or suggestions? Reach out to us."
  },
  telegram: {
    he: "טלגרם",
    en: "Telegram"
  },
  email: {
    he: "אימייל",
    en: "Email"
  },
  copyrightText: {
    he: "© פרילו " + new Date().getFullYear() + ". כל הזכויות שמורות.",
    en: "© Freelo " + new Date().getFullYear() + ". All rights reserved."
  }
};
