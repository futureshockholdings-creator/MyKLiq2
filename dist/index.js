var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc3) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc3 = __getOwnPropDesc(from, key)) || desc3.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  actionChatMessages: () => actionChatMessages,
  actionChatMessagesRelations: () => actionChatMessagesRelations,
  actionStreamStatusEnum: () => actionStreamStatusEnum,
  actionViewers: () => actionViewers,
  actionViewersRelations: () => actionViewersRelations,
  actions: () => actions,
  actionsRelations: () => actionsRelations,
  adCategoryEnum: () => adCategoryEnum,
  adInteractions: () => adInteractions,
  adStatusEnum: () => adStatusEnum,
  birthdayMessages: () => birthdayMessages,
  callParticipants: () => callParticipants,
  callStatusEnum: () => callStatusEnum,
  comments: () => comments,
  commentsRelations: () => commentsRelations,
  contentFilters: () => contentFilters,
  contentFiltersRelations: () => contentFiltersRelations,
  conversations: () => conversations,
  conversationsRelations: () => conversationsRelations,
  eventAttendees: () => eventAttendees,
  eventAttendeesRelations: () => eventAttendeesRelations,
  events: () => events,
  eventsRelations: () => eventsRelations,
  externalPosts: () => externalPosts,
  friendships: () => friendships,
  friendshipsRelations: () => friendshipsRelations,
  gifs: () => gifs,
  gifsRelations: () => gifsRelations,
  insertActionChatMessageSchema: () => insertActionChatMessageSchema,
  insertActionSchema: () => insertActionSchema,
  insertActionViewerSchema: () => insertActionViewerSchema,
  insertAdInteractionSchema: () => insertAdInteractionSchema,
  insertBirthdayMessageSchema: () => insertBirthdayMessageSchema,
  insertCallParticipantSchema: () => insertCallParticipantSchema,
  insertCommentSchema: () => insertCommentSchema,
  insertContentFilterSchema: () => insertContentFilterSchema,
  insertConversationSchema: () => insertConversationSchema,
  insertEventAttendeeSchema: () => insertEventAttendeeSchema,
  insertEventSchema: () => insertEventSchema,
  insertExternalPostSchema: () => insertExternalPostSchema,
  insertFriendshipSchema: () => insertFriendshipSchema,
  insertGifSchema: () => insertGifSchema,
  insertMeetupCheckInSchema: () => insertMeetupCheckInSchema,
  insertMeetupSchema: () => insertMeetupSchema,
  insertMessageSchema: () => insertMessageSchema,
  insertMovieconSchema: () => insertMovieconSchema,
  insertNotificationSchema: () => insertNotificationSchema,
  insertPollSchema: () => insertPollSchema,
  insertPollVoteSchema: () => insertPollVoteSchema,
  insertPostSchema: () => insertPostSchema,
  insertSocialCredentialSchema: () => insertSocialCredentialSchema,
  insertSponsoredAdSchema: () => insertSponsoredAdSchema,
  insertStorySchema: () => insertStorySchema,
  insertUserAdPreferencesSchema: () => insertUserAdPreferencesSchema,
  insertUserSchema: () => insertUserSchema,
  insertUserThemeSchema: () => insertUserThemeSchema,
  insertVideoCallSchema: () => insertVideoCallSchema,
  mediaTypeEnum: () => mediaTypeEnum,
  meetupCheckIns: () => meetupCheckIns,
  meetupCheckInsRelations: () => meetupCheckInsRelations,
  meetups: () => meetups,
  meetupsRelations: () => meetupsRelations,
  messages: () => messages,
  messagesRelations: () => messagesRelations,
  moviecons: () => moviecons,
  movieconsRelations: () => movieconsRelations,
  notificationTypeEnum: () => notificationTypeEnum,
  notifications: () => notifications,
  notificationsRelations: () => notificationsRelations,
  passwordResetTokens: () => passwordResetTokens,
  pollVotes: () => pollVotes,
  pollVotesRelations: () => pollVotesRelations,
  polls: () => polls,
  pollsRelations: () => pollsRelations,
  postLikes: () => postLikes,
  postLikesRelations: () => postLikesRelations,
  posts: () => posts,
  postsRelations: () => postsRelations,
  sessions: () => sessions,
  socialCredentials: () => socialCredentials,
  sponsoredAds: () => sponsoredAds,
  stories: () => stories,
  storiesRelations: () => storiesRelations,
  storyViews: () => storyViews,
  storyViewsRelations: () => storyViewsRelations,
  usedInviteCodes: () => usedInviteCodes,
  userAdPreferences: () => userAdPreferences,
  userThemes: () => userThemes,
  userThemesRelations: () => userThemesRelations,
  users: () => users,
  usersRelations: () => usersRelations,
  videoCalls: () => videoCalls
});
import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm";
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  text,
  integer,
  boolean,
  numeric,
  pgEnum,
  date
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var sessions, users, userThemes, friendships, usedInviteCodes, mediaTypeEnum, callStatusEnum, passwordResetTokens, gifs, adCategoryEnum, adStatusEnum, sponsoredAds, adInteractions, userAdPreferences, moviecons, posts, stories, comments, postLikes, contentFilters, storyViews, messages, conversations, polls, pollVotes, events, actionStreamStatusEnum, actions, actionViewers, actionChatMessages, meetups, meetupCheckIns, eventAttendees, notificationTypeEnum, notifications, usersRelations, gifsRelations, movieconsRelations, storiesRelations, storyViewsRelations, userThemesRelations, friendshipsRelations, postsRelations, commentsRelations, postLikesRelations, contentFiltersRelations, messagesRelations, conversationsRelations, pollsRelations, pollVotesRelations, eventsRelations, eventAttendeesRelations, actionsRelations, actionViewersRelations, actionChatMessagesRelations, meetupsRelations, meetupCheckInsRelations, notificationsRelations, insertUserSchema, insertNotificationSchema, insertUserThemeSchema, insertFriendshipSchema, insertPostSchema, insertStorySchema, insertCommentSchema, insertContentFilterSchema, insertMessageSchema, insertConversationSchema, insertEventSchema, insertEventAttendeeSchema, insertActionSchema, insertActionViewerSchema, insertActionChatMessageSchema, insertMeetupSchema, insertMeetupCheckInSchema, birthdayMessages, videoCalls, callParticipants, insertBirthdayMessageSchema, insertVideoCallSchema, insertCallParticipantSchema, insertGifSchema, insertMovieconSchema, insertPollSchema, insertPollVoteSchema, insertSponsoredAdSchema, insertAdInteractionSchema, insertUserAdPreferencesSchema, socialCredentials, externalPosts, insertSocialCredentialSchema, insertExternalPostSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    sessions = pgTable(
      "sessions",
      {
        sid: varchar("sid").primaryKey(),
        sess: jsonb("sess").notNull(),
        expire: timestamp("expire").notNull()
      },
      (table) => [index("IDX_session_expire").on(table.expire)]
    );
    users = pgTable("users", {
      id: varchar("id").primaryKey(),
      email: varchar("email").unique(),
      firstName: varchar("first_name"),
      lastName: varchar("last_name"),
      profileImageUrl: varchar("profile_image_url"),
      backgroundImageUrl: varchar("background_image_url"),
      phoneNumber: varchar("phone_number"),
      password: varchar("password"),
      // Hashed password
      // Security questions for password recovery (hashed)
      securityAnswer1: varchar("security_answer_1"),
      // First car
      securityAnswer2: varchar("security_answer_2"),
      // Mother's maiden name
      securityAnswer3: varchar("security_answer_3"),
      // Favorite teacher's last name
      securityPin: varchar("security_pin", { length: 60 }),
      // 4-digit PIN (hashed)
      bio: text("bio"),
      inviteCode: varchar("invite_code", { length: 20 }).unique(),
      kliqName: varchar("kliq_name").default("My Kliq"),
      kliqLeftEmoji: varchar("kliq_left_emoji").default("\u{1F3C6}"),
      kliqRightEmoji: varchar("kliq_right_emoji").default("\u{1F3C6}"),
      kliqClosed: boolean("kliq_closed").default(false),
      birthdate: date("birthdate"),
      profileMusicUrl: varchar("profile_music_url"),
      profileMusicTitle: varchar("profile_music_title"),
      // Extended profile details
      interests: text("interests").array(),
      favoriteLocations: text("favorite_locations").array(),
      favoriteFoods: text("favorite_foods").array(),
      musicGenres: text("music_genres").array(),
      relationshipStatus: varchar("relationship_status"),
      // single, taken, married, complicated, etc.
      hobbies: text("hobbies").array(),
      favoriteMovies: text("favorite_movies").array(),
      favoriteBooks: text("favorite_books").array(),
      petPreferences: varchar("pet_preferences"),
      // dogs, cats, both, none, other
      lifestyle: varchar("lifestyle"),
      // active, relaxed, adventurous, homebody, etc.
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    userThemes = pgTable("user_themes", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull().unique(),
      primaryColor: varchar("primary_color").default("#FF1493"),
      secondaryColor: varchar("secondary_color").default("#00BFFF"),
      fontFamily: varchar("font_family").default("comic"),
      fontColor: varchar("font_color").default("#FFFFFF"),
      navBgColor: varchar("nav_bg_color").default("#1F2937"),
      navActiveColor: varchar("nav_active_color").default("#FF1493"),
      borderStyle: varchar("border_style").default("retro"),
      enableSparkles: boolean("enable_sparkles").default(true),
      backgroundType: varchar("background_type").default("solid"),
      // 'solid', 'gradient', 'pattern'
      backgroundColor: varchar("background_color").default("#000000"),
      backgroundGradientStart: varchar("background_gradient_start").default("#FF1493"),
      backgroundGradientEnd: varchar("background_gradient_end").default("#00BFFF"),
      backgroundPattern: varchar("background_pattern").default("dots"),
      // 'dots', 'lines', 'waves', 'geometric'
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    friendships = pgTable("friendships", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      friendId: varchar("friend_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      rank: integer("rank").notNull(),
      // 1-28, lower number = higher rank
      status: varchar("status").default("pending"),
      // pending, accepted, declined
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    usedInviteCodes = pgTable("used_invite_codes", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      inviteCode: varchar("invite_code", { length: 20 }).unique().notNull(),
      usedBy: varchar("used_by").references(() => users.id, { onDelete: "cascade" }).notNull(),
      ownedBy: varchar("owned_by").references(() => users.id, { onDelete: "cascade" }).notNull(),
      usedAt: timestamp("used_at").defaultNow().notNull()
    });
    mediaTypeEnum = pgEnum("media_type", ["image", "video"]);
    callStatusEnum = pgEnum("call_status", ["pending", "active", "ended", "declined"]);
    passwordResetTokens = pgTable("password_reset_tokens", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      token: varchar("token").unique().notNull(),
      expiresAt: timestamp("expires_at").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    gifs = pgTable("gifs", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      title: varchar("title").notNull(),
      description: varchar("description"),
      url: varchar("url").notNull(),
      thumbnailUrl: varchar("thumbnail_url"),
      tags: varchar("tags").array().default(sql`'{}'::varchar[]`),
      category: varchar("category").notNull().default("general"),
      width: integer("width"),
      height: integer("height"),
      fileSize: integer("file_size"),
      trending: boolean("trending").default(false),
      featured: boolean("featured").default(false),
      uploadedBy: varchar("uploaded_by").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    adCategoryEnum = pgEnum("ad_category", [
      "food",
      "fashion",
      "tech",
      "entertainment",
      "travel",
      "fitness",
      "beauty",
      "automotive",
      "education",
      "finance",
      "health",
      "home",
      "gaming",
      "music",
      "books",
      "pets",
      "lifestyle",
      "sports"
    ]);
    adStatusEnum = pgEnum("ad_status", ["active", "paused", "expired", "pending"]);
    sponsoredAds = pgTable("sponsored_ads", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      title: varchar("title").notNull(),
      description: text("description").notNull(),
      imageUrl: varchar("image_url"),
      videoUrl: varchar("video_url"),
      backgroundColor: varchar("background_color").default("#ffffff"),
      // Background color for ad
      ctaText: varchar("cta_text").default("Learn More"),
      // Call-to-action text
      ctaUrl: varchar("cta_url").notNull(),
      // URL to redirect when clicked
      category: adCategoryEnum("category").notNull(),
      // Targeting criteria
      targetInterests: text("target_interests").array().default(sql`'{}'::text[]`),
      targetMusicGenres: text("target_music_genres").array().default(sql`'{}'::text[]`),
      targetRelationshipStatus: varchar("target_relationship_status").array().default(sql`'{}'::varchar[]`),
      targetHobbies: text("target_hobbies").array().default(sql`'{}'::text[]`),
      targetPetPreferences: varchar("target_pet_preferences").array().default(sql`'{}'::varchar[]`),
      targetLifestyle: varchar("target_lifestyle").array().default(sql`'{}'::varchar[]`),
      targetAgeMin: integer("target_age_min"),
      targetAgeMax: integer("target_age_max"),
      // Ad management
      status: adStatusEnum("status").default("active"),
      priority: integer("priority").default(1),
      // Higher number = higher priority
      dailyBudget: numeric("daily_budget", { precision: 10, scale: 2 }),
      costPerClick: numeric("cost_per_click", { precision: 10, scale: 2 }),
      // Scheduling
      startDate: timestamp("start_date").defaultNow(),
      endDate: timestamp("end_date"),
      // Performance tracking
      impressions: integer("impressions").default(0),
      clicks: integer("clicks").default(0),
      // Metadata
      advertiserName: varchar("advertiser_name").notNull(),
      advertiserEmail: varchar("advertiser_email").notNull(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    adInteractions = pgTable("ad_interactions", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      adId: varchar("ad_id").references(() => sponsoredAds.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      interactionType: varchar("interaction_type").notNull(),
      // 'impression', 'click'
      timestamp: timestamp("timestamp").defaultNow(),
      userAgent: text("user_agent"),
      ipAddress: varchar("ip_address")
    });
    userAdPreferences = pgTable("user_ad_preferences", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull().unique(),
      enableTargetedAds: boolean("enable_targeted_ads").default(true),
      blockedCategories: text("blocked_categories").array().default(sql`'{}'::text[]`),
      maxAdsPerDay: integer("max_ads_per_day").default(5),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    moviecons = pgTable("moviecons", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      title: varchar("title").notNull(),
      description: varchar("description"),
      videoUrl: varchar("video_url").notNull(),
      thumbnailUrl: varchar("thumbnail_url"),
      duration: integer("duration").notNull(),
      // in seconds, max 5
      tags: varchar("tags").array().default(sql`'{}'::varchar[]`),
      category: varchar("category").notNull().default("general"),
      movieSource: varchar("movie_source"),
      // e.g., "The Avengers (2012)"
      width: integer("width"),
      height: integer("height"),
      fileSize: integer("file_size"),
      trending: boolean("trending").default(false),
      featured: boolean("featured").default(false),
      uploadedBy: varchar("uploaded_by").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    posts = pgTable("posts", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      content: text("content"),
      mediaUrl: varchar("media_url"),
      mediaType: mediaTypeEnum("media_type"),
      gifId: varchar("gif_id").references(() => gifs.id),
      movieconId: varchar("moviecon_id").references(() => moviecons.id),
      likes: integer("likes").default(0),
      latitude: numeric("latitude", { precision: 10, scale: 7 }),
      longitude: numeric("longitude", { precision: 10, scale: 7 }),
      locationName: varchar("location_name"),
      address: varchar("address"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    stories = pgTable("stories", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      content: text("content"),
      mediaUrl: varchar("media_url"),
      mediaType: mediaTypeEnum("media_type"),
      viewCount: integer("view_count").default(0),
      createdAt: timestamp("created_at").defaultNow(),
      expiresAt: timestamp("expires_at").notNull()
    });
    comments = pgTable("comments", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      postId: varchar("post_id").references(() => posts.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      content: text("content").notNull(),
      gifId: varchar("gif_id").references(() => gifs.id),
      movieconId: varchar("moviecon_id").references(() => moviecons.id),
      createdAt: timestamp("created_at").defaultNow()
    });
    postLikes = pgTable("post_likes", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      postId: varchar("post_id").references(() => posts.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    contentFilters = pgTable("content_filters", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      keyword: varchar("keyword").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    storyViews = pgTable("story_views", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      storyId: varchar("story_id").references(() => stories.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      viewedAt: timestamp("viewed_at").defaultNow()
    });
    messages = pgTable("messages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      senderId: varchar("sender_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      receiverId: varchar("receiver_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      content: text("content"),
      mediaUrl: varchar("media_url"),
      mediaType: mediaTypeEnum("media_type"),
      gifId: varchar("gif_id").references(() => gifs.id),
      movieconId: varchar("moviecon_id").references(() => moviecons.id),
      isRead: boolean("is_read").default(false),
      readAt: timestamp("read_at"),
      expiresAt: timestamp("expires_at"),
      createdAt: timestamp("created_at").defaultNow()
    });
    conversations = pgTable("conversations", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      user1Id: varchar("user1_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      user2Id: varchar("user2_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      lastMessageId: varchar("last_message_id").references(() => messages.id),
      lastActivity: timestamp("last_activity").defaultNow(),
      createdAt: timestamp("created_at").defaultNow()
    });
    polls = pgTable("polls", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      title: varchar("title").notNull(),
      description: text("description"),
      options: text("options").array().notNull(),
      // Array of poll options
      expiresAt: timestamp("expires_at").notNull(),
      // When the poll expires
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    pollVotes = pgTable("poll_votes", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      pollId: varchar("poll_id").references(() => polls.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      selectedOption: integer("selected_option").notNull(),
      // Index of the selected option
      createdAt: timestamp("created_at").defaultNow()
    }, (table) => [
      // Ensure one vote per user per poll
      index("unique_user_poll_vote").on(table.pollId, table.userId)
    ]);
    events = pgTable("events", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      title: varchar("title").notNull(),
      description: text("description"),
      location: varchar("location"),
      eventDate: timestamp("event_date").notNull(),
      mediaUrl: varchar("media_url"),
      mediaType: mediaTypeEnum("media_type"),
      isPublic: boolean("is_public").default(true),
      attendeeCount: integer("attendee_count").default(0),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    actionStreamStatusEnum = pgEnum("action_stream_status", ["live", "ended"]);
    actions = pgTable("actions", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      title: varchar("title").notNull(),
      description: text("description"),
      status: actionStreamStatusEnum("status").default("live"),
      viewerCount: integer("viewer_count").default(0),
      thumbnailUrl: varchar("thumbnail_url"),
      streamKey: varchar("stream_key").notNull().unique(),
      chatEnabled: boolean("chat_enabled").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      endedAt: timestamp("ended_at")
    });
    actionViewers = pgTable("action_viewers", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      actionId: varchar("action_id").references(() => actions.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      joinedAt: timestamp("joined_at").defaultNow(),
      leftAt: timestamp("left_at")
    });
    actionChatMessages = pgTable("action_chat_messages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      actionId: varchar("action_id").references(() => actions.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      message: text("message").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    meetups = pgTable("meetups", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      title: varchar("title").notNull(),
      description: text("description"),
      locationName: varchar("location_name").notNull(),
      address: text("address"),
      latitude: numeric("latitude", { precision: 10, scale: 8 }),
      longitude: numeric("longitude", { precision: 11, scale: 8 }),
      meetupTime: timestamp("meetup_time").notNull(),
      maxAttendees: integer("max_attendees").default(50),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      endedAt: timestamp("ended_at")
    });
    meetupCheckIns = pgTable("meetup_check_ins", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      meetupId: varchar("meetup_id").references(() => meetups.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      checkInTime: timestamp("check_in_time").defaultNow(),
      checkOutTime: timestamp("check_out_time"),
      latitude: numeric("latitude", { precision: 10, scale: 8 }),
      longitude: numeric("longitude", { precision: 11, scale: 8 }),
      isVerified: boolean("is_verified").default(false)
      // Based on location proximity
    });
    eventAttendees = pgTable("event_attendees", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      eventId: varchar("event_id").references(() => events.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      status: varchar("status").default("going"),
      // going, maybe, not_going
      createdAt: timestamp("created_at").defaultNow()
    });
    notificationTypeEnum = pgEnum("notification_type", [
      "message",
      "friend_request",
      "event_invite",
      "post_like",
      "comment",
      "story_view",
      "live_stream",
      "meetup_invite",
      "birthday"
    ]);
    notifications = pgTable("notifications", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      type: notificationTypeEnum("type").notNull(),
      title: varchar("title").notNull(),
      message: text("message").notNull(),
      actionUrl: varchar("action_url"),
      // URL to navigate when notification is clicked
      relatedId: varchar("related_id"),
      // ID of related entity (post, message, user, etc)
      relatedType: varchar("related_type"),
      // Type of related entity
      isRead: boolean("is_read").default(false),
      isVisible: boolean("is_visible").default(true),
      // Allow hiding notifications
      priority: varchar("priority").default("normal"),
      // low, normal, high, urgent
      expiresAt: timestamp("expires_at"),
      // Auto-expire notifications
      createdAt: timestamp("created_at").defaultNow(),
      readAt: timestamp("read_at")
    });
    usersRelations = relations(users, ({ many, one }) => ({
      friendships: many(friendships, { relationName: "userFriendships" }),
      friendOf: many(friendships, { relationName: "friendOfUser" }),
      posts: many(posts),
      stories: many(stories),
      comments: many(comments),
      postLikes: many(postLikes),
      storyViews: many(storyViews),
      contentFilters: many(contentFilters),
      userTheme: one(userThemes),
      sentMessages: many(messages, { relationName: "senderMessages" }),
      receivedMessages: many(messages, { relationName: "receiverMessages" }),
      conversations1: many(conversations, { relationName: "user1Conversations" }),
      conversations2: many(conversations, { relationName: "user2Conversations" }),
      events: many(events),
      eventAttendees: many(eventAttendees),
      actions: many(actions),
      actionViewers: many(actionViewers),
      actionChatMessages: many(actionChatMessages),
      meetups: many(meetups),
      meetupCheckIns: many(meetupCheckIns),
      uploadedGifs: many(gifs),
      uploadedMoviecons: many(moviecons),
      notifications: many(notifications)
    }));
    gifsRelations = relations(gifs, ({ one, many }) => ({
      uploader: one(users, {
        fields: [gifs.uploadedBy],
        references: [users.id]
      }),
      posts: many(posts),
      comments: many(comments)
    }));
    movieconsRelations = relations(moviecons, ({ one, many }) => ({
      uploader: one(users, {
        fields: [moviecons.uploadedBy],
        references: [users.id]
      }),
      posts: many(posts),
      comments: many(comments)
    }));
    storiesRelations = relations(stories, ({ one, many }) => ({
      author: one(users, {
        fields: [stories.userId],
        references: [users.id]
      }),
      views: many(storyViews)
    }));
    storyViewsRelations = relations(storyViews, ({ one }) => ({
      story: one(stories, {
        fields: [storyViews.storyId],
        references: [stories.id]
      }),
      user: one(users, {
        fields: [storyViews.userId],
        references: [users.id]
      })
    }));
    userThemesRelations = relations(userThemes, ({ one }) => ({
      user: one(users, {
        fields: [userThemes.userId],
        references: [users.id]
      })
    }));
    friendshipsRelations = relations(friendships, ({ one }) => ({
      user: one(users, {
        fields: [friendships.userId],
        references: [users.id],
        relationName: "userFriendships"
      }),
      friend: one(users, {
        fields: [friendships.friendId],
        references: [users.id],
        relationName: "friendOfUser"
      })
    }));
    postsRelations = relations(posts, ({ one, many }) => ({
      author: one(users, {
        fields: [posts.userId],
        references: [users.id]
      }),
      gif: one(gifs, {
        fields: [posts.gifId],
        references: [gifs.id]
      }),
      moviecon: one(moviecons, {
        fields: [posts.movieconId],
        references: [moviecons.id]
      }),
      comments: many(comments),
      likes: many(postLikes)
    }));
    commentsRelations = relations(comments, ({ one }) => ({
      post: one(posts, {
        fields: [comments.postId],
        references: [posts.id]
      }),
      author: one(users, {
        fields: [comments.userId],
        references: [users.id]
      }),
      gif: one(gifs, {
        fields: [comments.gifId],
        references: [gifs.id]
      }),
      moviecon: one(moviecons, {
        fields: [comments.movieconId],
        references: [moviecons.id]
      })
    }));
    postLikesRelations = relations(postLikes, ({ one }) => ({
      post: one(posts, {
        fields: [postLikes.postId],
        references: [posts.id]
      }),
      user: one(users, {
        fields: [postLikes.userId],
        references: [users.id]
      })
    }));
    contentFiltersRelations = relations(contentFilters, ({ one }) => ({
      user: one(users, {
        fields: [contentFilters.userId],
        references: [users.id]
      })
    }));
    messagesRelations = relations(messages, ({ one }) => ({
      sender: one(users, {
        fields: [messages.senderId],
        references: [users.id],
        relationName: "senderMessages"
      }),
      receiver: one(users, {
        fields: [messages.receiverId],
        references: [users.id],
        relationName: "receiverMessages"
      }),
      gif: one(gifs, {
        fields: [messages.gifId],
        references: [gifs.id]
      }),
      moviecon: one(moviecons, {
        fields: [messages.movieconId],
        references: [moviecons.id]
      })
    }));
    conversationsRelations = relations(conversations, ({ one }) => ({
      user1: one(users, {
        fields: [conversations.user1Id],
        references: [users.id],
        relationName: "user1Conversations"
      }),
      user2: one(users, {
        fields: [conversations.user2Id],
        references: [users.id],
        relationName: "user2Conversations"
      }),
      lastMessage: one(messages, {
        fields: [conversations.lastMessageId],
        references: [messages.id]
      })
    }));
    pollsRelations = relations(polls, ({ one, many }) => ({
      author: one(users, {
        fields: [polls.userId],
        references: [users.id]
      }),
      votes: many(pollVotes)
    }));
    pollVotesRelations = relations(pollVotes, ({ one }) => ({
      poll: one(polls, {
        fields: [pollVotes.pollId],
        references: [polls.id]
      }),
      voter: one(users, {
        fields: [pollVotes.userId],
        references: [users.id]
      })
    }));
    eventsRelations = relations(events, ({ one, many }) => ({
      author: one(users, {
        fields: [events.userId],
        references: [users.id]
      }),
      attendees: many(eventAttendees)
    }));
    eventAttendeesRelations = relations(eventAttendees, ({ one }) => ({
      event: one(events, {
        fields: [eventAttendees.eventId],
        references: [events.id]
      }),
      user: one(users, {
        fields: [eventAttendees.userId],
        references: [users.id]
      })
    }));
    actionsRelations = relations(actions, ({ one, many }) => ({
      user: one(users, {
        fields: [actions.userId],
        references: [users.id]
      }),
      viewers: many(actionViewers),
      chatMessages: many(actionChatMessages)
    }));
    actionViewersRelations = relations(actionViewers, ({ one }) => ({
      action: one(actions, {
        fields: [actionViewers.actionId],
        references: [actions.id]
      }),
      user: one(users, {
        fields: [actionViewers.userId],
        references: [users.id]
      })
    }));
    actionChatMessagesRelations = relations(actionChatMessages, ({ one }) => ({
      action: one(actions, {
        fields: [actionChatMessages.actionId],
        references: [actions.id]
      }),
      user: one(users, {
        fields: [actionChatMessages.userId],
        references: [users.id]
      })
    }));
    meetupsRelations = relations(meetups, ({ one, many }) => ({
      organizer: one(users, {
        fields: [meetups.userId],
        references: [users.id]
      }),
      checkIns: many(meetupCheckIns)
    }));
    meetupCheckInsRelations = relations(meetupCheckIns, ({ one }) => ({
      meetup: one(meetups, {
        fields: [meetupCheckIns.meetupId],
        references: [meetups.id]
      }),
      user: one(users, {
        fields: [meetupCheckIns.userId],
        references: [users.id]
      })
    }));
    notificationsRelations = relations(notifications, ({ one }) => ({
      user: one(users, {
        fields: [notifications.userId],
        references: [users.id]
      })
    }));
    insertUserSchema = createInsertSchema(users);
    insertNotificationSchema = createInsertSchema(notifications).omit({ id: true, createdAt: true, readAt: true });
    insertUserThemeSchema = createInsertSchema(userThemes).omit({ id: true, createdAt: true, updatedAt: true });
    insertFriendshipSchema = createInsertSchema(friendships).omit({ id: true, createdAt: true, updatedAt: true });
    insertPostSchema = createInsertSchema(posts).omit({ id: true, likes: true, createdAt: true, updatedAt: true });
    insertStorySchema = createInsertSchema(stories).omit({ id: true, viewCount: true, createdAt: true }).extend({
      expiresAt: z.string().transform((val) => new Date(val))
    });
    insertCommentSchema = createInsertSchema(comments).omit({ id: true, createdAt: true });
    insertContentFilterSchema = createInsertSchema(contentFilters).omit({ id: true, createdAt: true });
    insertMessageSchema = createInsertSchema(messages).omit({ id: true, isRead: true, createdAt: true });
    insertConversationSchema = createInsertSchema(conversations).omit({ id: true, lastMessageId: true, lastActivity: true, createdAt: true });
    insertEventSchema = createInsertSchema(events).omit({ id: true, attendeeCount: true, createdAt: true, updatedAt: true }).extend({
      eventDate: z.string().transform((val) => new Date(val))
    });
    insertEventAttendeeSchema = createInsertSchema(eventAttendees).omit({ id: true, createdAt: true });
    insertActionSchema = createInsertSchema(actions).omit({ id: true, viewerCount: true, createdAt: true, endedAt: true }).extend({
      streamKey: z.string().optional()
    });
    insertActionViewerSchema = createInsertSchema(actionViewers).omit({ id: true, joinedAt: true, leftAt: true });
    insertActionChatMessageSchema = createInsertSchema(actionChatMessages).omit({ id: true, createdAt: true });
    insertMeetupSchema = createInsertSchema(meetups).omit({ id: true, isActive: true, createdAt: true, endedAt: true }).extend({
      meetupTime: z.string().transform((val) => new Date(val))
    });
    insertMeetupCheckInSchema = createInsertSchema(meetupCheckIns).omit({ id: true, checkInTime: true, checkOutTime: true, isVerified: true });
    birthdayMessages = pgTable("birthday_messages", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      birthdayUserId: varchar("birthday_user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      senderUserId: varchar("sender_user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      message: text("message").notNull(),
      year: integer("year").notNull(),
      // Track year to avoid duplicate messages
      postId: varchar("post_id").references(() => posts.id, { onDelete: "cascade" }),
      createdAt: timestamp("created_at").defaultNow()
    });
    videoCalls = pgTable("video_calls", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      initiatorId: varchar("initiator_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      status: callStatusEnum("status").default("pending").notNull(),
      startedAt: timestamp("started_at"),
      endedAt: timestamp("ended_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    callParticipants = pgTable("call_participants", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      callId: varchar("call_id").references(() => videoCalls.id, { onDelete: "cascade" }).notNull(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      status: varchar("status").default("invited").notNull(),
      // invited, joined, declined, left
      joinedAt: timestamp("joined_at"),
      leftAt: timestamp("left_at"),
      createdAt: timestamp("created_at").defaultNow()
    });
    insertBirthdayMessageSchema = createInsertSchema(birthdayMessages).omit({ id: true, createdAt: true });
    insertVideoCallSchema = createInsertSchema(videoCalls).omit({ id: true, createdAt: true, updatedAt: true });
    insertCallParticipantSchema = createInsertSchema(callParticipants).omit({ id: true, createdAt: true });
    insertGifSchema = createInsertSchema(gifs).omit({ id: true, createdAt: true, updatedAt: true });
    insertMovieconSchema = createInsertSchema(moviecons).omit({ id: true, createdAt: true, updatedAt: true });
    insertPollSchema = createInsertSchema(polls).omit({ id: true, createdAt: true, updatedAt: true });
    insertPollVoteSchema = createInsertSchema(pollVotes).omit({ id: true, createdAt: true });
    insertSponsoredAdSchema = createInsertSchema(sponsoredAds).omit({
      id: true,
      impressions: true,
      clicks: true,
      createdAt: true,
      updatedAt: true
    }).extend({
      startDate: z.string().transform((val) => new Date(val)),
      endDate: z.string().transform((val) => new Date(val)).optional()
    });
    insertAdInteractionSchema = createInsertSchema(adInteractions).omit({
      id: true,
      timestamp: true
    });
    insertUserAdPreferencesSchema = createInsertSchema(userAdPreferences).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    socialCredentials = pgTable("social_credentials", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
      platform: varchar("platform").notNull(),
      // 'instagram', 'tiktok', 'twitch', 'discord', 'youtube', 'reddit'
      platformUserId: varchar("platform_user_id").notNull(),
      platformUsername: varchar("platform_username").notNull(),
      encryptedAccessToken: text("encrypted_access_token").notNull(),
      encryptedRefreshToken: text("encrypted_refresh_token"),
      tokenExpiresAt: timestamp("token_expires_at"),
      scopes: text("scopes").array(),
      // OAuth scopes granted
      isActive: boolean("is_active").default(true),
      lastSyncAt: timestamp("last_sync_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    externalPosts = pgTable("external_posts", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      socialCredentialId: varchar("social_credential_id").references(() => socialCredentials.id, { onDelete: "cascade" }).notNull(),
      platform: varchar("platform").notNull(),
      platformPostId: varchar("platform_post_id").notNull(),
      platformUserId: varchar("platform_user_id").notNull(),
      platformUsername: varchar("platform_username").notNull(),
      content: text("content"),
      mediaUrls: text("media_urls").array(),
      thumbnailUrl: varchar("thumbnail_url"),
      postUrl: varchar("post_url").notNull(),
      likes: integer("likes").default(0),
      comments: integer("comments").default(0),
      shares: integer("shares").default(0),
      platformCreatedAt: timestamp("platform_created_at").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    insertSocialCredentialSchema = createInsertSchema(socialCredentials).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertExternalPostSchema = createInsertSchema(externalPosts).omit({
      id: true,
      createdAt: true
    });
  }
});

// server/db.ts
var db_exports = {};
__export(db_exports, {
  db: () => db,
  pool: () => pool
});
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
var pool, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    neonConfig.webSocketConstructor = ws;
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?"
      );
    }
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
      connectionTimeoutMillis: 5e3,
      // Reduced from 10s for faster failover
      idleTimeoutMillis: 2e4,
      // Reduced from 30s to free unused connections faster
      max: 25,
      // Increased for higher concurrent load
      min: 3
      // Reduced minimum to save resources in low usage
    });
    pool.on("error", (err) => {
      console.error("Unexpected error on idle database client:", err);
    });
    pool.on("connect", () => {
      console.log("New database connection established");
    });
    db = drizzle({ client: pool, schema: schema_exports });
  }
});

// server/notificationService.ts
var notificationService_exports = {};
__export(notificationService_exports, {
  NotificationService: () => NotificationService,
  notificationService: () => notificationService
});
import { eq as eq2, and as and2, desc as desc2 } from "drizzle-orm";
var NotificationService, notificationService;
var init_notificationService = __esm({
  "server/notificationService.ts"() {
    "use strict";
    init_db();
    init_schema();
    NotificationService = class {
      // Create a new notification
      async createNotification(data) {
        const [notification] = await db.insert(notifications).values(data).returning();
        return notification;
      }
      // Get notifications for a user
      async getUserNotifications(userId, type) {
        let whereClause = and2(
          eq2(notifications.userId, userId),
          eq2(notifications.isVisible, true)
        );
        if (type && type !== "all" && type !== "undefined") {
          whereClause = and2(
            eq2(notifications.userId, userId),
            eq2(notifications.type, type),
            eq2(notifications.isVisible, true)
          );
        }
        return await db.select().from(notifications).where(whereClause).orderBy(desc2(notifications.createdAt));
      }
      // Mark notification as read
      async markAsRead(notificationId, userId) {
        const [notification] = await db.update(notifications).set({
          isRead: true,
          readAt: /* @__PURE__ */ new Date()
        }).where(and2(
          eq2(notifications.id, notificationId),
          eq2(notifications.userId, userId)
        )).returning();
        return notification;
      }
      // Mark all notifications as read for a user
      async markAllAsRead(userId, type) {
        let whereClause = and2(
          eq2(notifications.userId, userId),
          eq2(notifications.isRead, false),
          eq2(notifications.isVisible, true)
        );
        if (type && type !== "all" && type !== "undefined") {
          whereClause = and2(
            eq2(notifications.userId, userId),
            eq2(notifications.type, type),
            eq2(notifications.isRead, false),
            eq2(notifications.isVisible, true)
          );
        }
        const updatedNotifications = await db.update(notifications).set({
          isRead: true,
          readAt: /* @__PURE__ */ new Date()
        }).where(whereClause).returning();
        return updatedNotifications;
      }
      // Hide/delete a notification
      async hideNotification(notificationId, userId) {
        const [notification] = await db.update(notifications).set({ isVisible: false }).where(and2(
          eq2(notifications.id, notificationId),
          eq2(notifications.userId, userId)
        )).returning();
        return notification;
      }
      // Delete a notification completely
      async deleteNotification(notificationId, userId) {
        const [notification] = await db.delete(notifications).where(and2(
          eq2(notifications.id, notificationId),
          eq2(notifications.userId, userId)
        )).returning();
        return notification;
      }
      // Delete all notifications for a user (optionally filtered by type)
      async deleteAllNotifications(userId, type) {
        let whereClause = and2(
          eq2(notifications.userId, userId),
          eq2(notifications.isVisible, true)
        );
        if (type && type !== "all" && type !== "undefined") {
          whereClause = and2(
            eq2(notifications.userId, userId),
            eq2(notifications.type, type),
            eq2(notifications.isVisible, true)
          );
        }
        const deletedNotifications = await db.delete(notifications).where(whereClause).returning();
        return deletedNotifications;
      }
      // Clean up expired notifications
      async cleanupExpiredNotifications() {
        const now = /* @__PURE__ */ new Date();
        const deletedNotifications = await db.delete(notifications).where(and2(
          eq2(notifications.isVisible, true)
          // notifications.expiresAt < now (need proper comparison)
        )).returning();
        return deletedNotifications;
      }
      // Helper methods for creating specific notification types
      async notifyNewMessage(receiverId, senderId, senderName, messagePreview) {
        return this.createNotification({
          userId: receiverId,
          type: "message",
          title: `New message from ${senderName}`,
          message: messagePreview,
          actionUrl: "/messages",
          relatedId: senderId,
          relatedType: "user",
          priority: "normal"
        });
      }
      async notifyFriendRequest(userId, fromUserId, fromUserName) {
        return this.createNotification({
          userId,
          type: "friend_request",
          title: "New friend request",
          message: `${fromUserName} wants to be friends`,
          actionUrl: "/friends",
          relatedId: fromUserId,
          relatedType: "user",
          priority: "normal"
        });
      }
      async notifyEventInvite(userId, eventId, eventTitle, inviterName) {
        return this.createNotification({
          userId,
          type: "event_invite",
          title: "Event invitation",
          message: `${inviterName} invited you to "${eventTitle}"`,
          actionUrl: `/events/${eventId}`,
          relatedId: eventId,
          relatedType: "event",
          priority: "normal"
        });
      }
      async notifyPostLike(userId, likerName, postId) {
        return this.createNotification({
          userId,
          type: "post_like",
          title: "Post liked",
          message: `${likerName} liked your post`,
          actionUrl: `/bulletin`,
          relatedId: postId,
          relatedType: "post",
          priority: "low"
        });
      }
      async notifyComment(userId, commenterName, postId, commentPreview) {
        return this.createNotification({
          userId,
          type: "comment",
          title: "New comment",
          message: `${commenterName} commented: ${commentPreview}`,
          actionUrl: `/bulletin`,
          relatedId: postId,
          relatedType: "post",
          priority: "normal"
        });
      }
      async notifyLiveStream(userId, streamerName, streamTitle, streamId) {
        return this.createNotification({
          userId,
          type: "live_stream",
          title: "Live stream started",
          message: `${streamerName} is live: ${streamTitle}`,
          actionUrl: `/action/${streamId}`,
          relatedId: streamId,
          relatedType: "action",
          priority: "high"
        });
      }
      async notifyBirthday(userId, birthdayUserName, birthdayUserId) {
        return this.createNotification({
          userId,
          type: "birthday",
          title: "Birthday reminder",
          message: `It's ${birthdayUserName}'s birthday today!`,
          actionUrl: `/user/${birthdayUserId}`,
          relatedId: birthdayUserId,
          relatedType: "user",
          priority: "normal"
        });
      }
    };
    notificationService = new NotificationService();
  }
});

// server/cache.ts
var cache_exports = {};
__export(cache_exports, {
  cache: () => cache,
  getCacheStats: () => getCacheStats,
  getCachedOrFetch: () => getCachedOrFetch,
  invalidateCache: () => invalidateCache
});
function getCachedOrFetch(key, fetchFn, ttlMs = 3e5) {
  const cached = cache.get(key);
  if (cached !== null) {
    return Promise.resolve(cached);
  }
  return fetchFn().then((data) => {
    cache.set(key, data, ttlMs);
    return data;
  });
}
function invalidateCache(pattern) {
  const keys = cache.getKeys();
  keys.forEach((key) => {
    if (key.includes(pattern)) {
      cache.delete(key);
    }
  });
}
function getCacheStats() {
  return cache.getStats();
}
var SimpleCache, cache;
var init_cache = __esm({
  "server/cache.ts"() {
    "use strict";
    SimpleCache = class {
      cache = /* @__PURE__ */ new Map();
      maxSize = 2e3;
      // Increased for better performance, prevent memory leaks
      // Public method to access cache keys for invalidation
      getKeys() {
        return Array.from(this.cache.keys());
      }
      set(key, data, ttlMs = 3e5) {
        if (this.cache.size >= this.maxSize) {
          const firstKey = this.cache.keys().next().value;
          if (firstKey) {
            this.cache.delete(firstKey);
          }
        }
        this.cache.set(key, {
          data,
          timestamp: Date.now(),
          ttl: ttlMs
        });
      }
      get(key) {
        const item = this.cache.get(key);
        if (!item) {
          return null;
        }
        if (Date.now() - item.timestamp > item.ttl) {
          this.cache.delete(key);
          return null;
        }
        return item.data;
      }
      delete(key) {
        this.cache.delete(key);
      }
      clear() {
        this.cache.clear();
      }
      // Clean up expired items periodically
      cleanup() {
        const now = Date.now();
        const entries = Array.from(this.cache.entries());
        for (const [key, item] of entries) {
          if (now - item.timestamp > item.ttl) {
            this.cache.delete(key);
          }
        }
      }
      getStats() {
        return {
          size: this.cache.size,
          maxSize: this.maxSize
        };
      }
    };
    cache = new SimpleCache();
    setInterval(() => {
      cache.cleanup();
      console.log(`Cache stats: ${JSON.stringify(getCacheStats())}`);
    }, 2 * 60 * 1e3);
  }
});

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
init_schema();
init_db();
import { eq, and, desc, sql as sql2, inArray, like, or, lt, lte, gte, count, isNull } from "drizzle-orm";
import { randomUUID } from "crypto";
var DatabaseStorage = class {
  // User operations
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async getUserByEmail(email) {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }
  async getUserByPhone(phoneNumber) {
    const [user] = await db.select().from(users).where(eq(users.phoneNumber, phoneNumber));
    return user;
  }
  async getUsersByPhone(phoneNumber) {
    const userList = await db.select().from(users).where(eq(users.phoneNumber, phoneNumber));
    return userList;
  }
  async getUserByName(firstName, lastName) {
    const [user] = await db.select().from(users).where(
      and(
        eq(sql2`LOWER(${users.firstName})`, firstName.toLowerCase()),
        eq(sql2`LOWER(${users.lastName})`, lastName.toLowerCase())
      )
    );
    return user;
  }
  async getUserByNameAndPhone(firstName, lastName, phoneNumber) {
    const [user] = await db.select().from(users).where(
      and(
        eq(sql2`LOWER(${users.firstName})`, firstName.toLowerCase()),
        eq(sql2`LOWER(${users.lastName})`, lastName.toLowerCase()),
        eq(users.phoneNumber, phoneNumber)
      )
    );
    return user;
  }
  async upsertUser(userData) {
    const inviteCode = await this.generateInviteCode();
    const [user] = await db.insert(users).values({ ...userData, inviteCode }).onConflictDoUpdate({
      target: users.id,
      set: {
        ...userData,
        updatedAt: /* @__PURE__ */ new Date()
      }
    }).returning();
    return user;
  }
  async updateUser(userId, updates) {
    const [user] = await db.update(users).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(users.id, userId)).returning();
    return user;
  }
  async updateUserPassword(userId, hashedPassword) {
    await db.update(users).set({
      password: hashedPassword,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(users.id, userId));
  }
  // User theme operations
  async getUserTheme(userId) {
    const [theme] = await db.select().from(userThemes).where(eq(userThemes.userId, userId));
    return theme;
  }
  async upsertUserTheme(theme) {
    const [userTheme] = await db.insert(userThemes).values(theme).onConflictDoUpdate({
      target: userThemes.userId,
      set: {
        ...theme,
        updatedAt: /* @__PURE__ */ new Date()
      }
    }).returning();
    return userTheme;
  }
  // Friend operations
  async getFriends(userId) {
    const friends = await db.select({
      id: friendships.id,
      userId: friendships.userId,
      friendId: friendships.friendId,
      rank: friendships.rank,
      status: friendships.status,
      createdAt: friendships.createdAt,
      updatedAt: friendships.updatedAt,
      friend: users
    }).from(friendships).innerJoin(users, eq(friendships.friendId, users.id)).where(and(eq(friendships.userId, userId), eq(friendships.status, "accepted"))).orderBy(friendships.rank);
    return friends;
  }
  async addFriend(friendship) {
    const [newFriendship] = await db.insert(friendships).values(friendship).returning();
    return newFriendship;
  }
  async updateFriendRank(userId, friendId, newRank) {
    console.log(`Updating friend rank: ${friendId} to rank ${newRank}`);
    const allFriends = await db.select().from(friendships).where(and(eq(friendships.userId, userId), eq(friendships.status, "accepted"))).orderBy(friendships.rank);
    console.log(`Found ${allFriends.length} friends for user ${userId}`);
    const friendToMove = allFriends.find((f) => f.friendId === friendId);
    if (!friendToMove) {
      console.log(`Friend ${friendId} not found for user ${userId}`);
      return;
    }
    const oldRank = friendToMove.rank;
    console.log(`Moving friend from rank ${oldRank} to rank ${newRank}`);
    if (oldRank === newRank) {
      console.log(`Rank unchanged, skipping update`);
      return;
    }
    await db.transaction(async (tx) => {
      const updatedFriends = [...allFriends];
      const movedFriend = updatedFriends.splice(oldRank - 1, 1)[0];
      updatedFriends.splice(newRank - 1, 0, movedFriend);
      for (let i = 0; i < updatedFriends.length; i++) {
        const friend = updatedFriends[i];
        const newRankForFriend = i + 1;
        console.log(`Setting friend ${friend.friendId} to rank ${newRankForFriend}`);
        await tx.update(friendships).set({ rank: newRankForFriend, updatedAt: /* @__PURE__ */ new Date() }).where(and(eq(friendships.userId, userId), eq(friendships.friendId, friend.friendId)));
      }
    });
    console.log(`Successfully updated friend ranks`);
  }
  async acceptFriendship(userId, friendId) {
    await db.update(friendships).set({ status: "accepted", updatedAt: /* @__PURE__ */ new Date() }).where(and(eq(friendships.userId, userId), eq(friendships.friendId, friendId)));
  }
  async removeFriend(userId, friendId) {
    await db.delete(friendships).where(and(eq(friendships.userId, userId), eq(friendships.friendId, friendId)));
  }
  async leaveKliq(userId) {
    await db.delete(friendships).where(or(eq(friendships.userId, userId), eq(friendships.friendId, userId)));
  }
  // Post operations
  async getPosts(userId, filters) {
    const userFriends = await this.getFriends(userId);
    const friendIds = userFriends.map((f) => f.friendId);
    friendIds.push(userId);
    let whereConditions = [inArray(posts.userId, friendIds)];
    if (filters.length > 0) {
      const filterConditions = filters.map(
        (filter) => sql2`LOWER(${posts.content}) LIKE LOWER(${"%" + filter + "%"})`
      );
      whereConditions.push(sql2`NOT (${or(...filterConditions)})`);
    }
    console.log(`Getting posts for user ${userId} and friends:`, friendIds);
    console.log(`Using filters:`, filters);
    const postsQuery = db.select({
      id: posts.id,
      userId: posts.userId,
      content: posts.content,
      mediaUrl: posts.mediaUrl,
      mediaType: posts.mediaType,
      gifId: posts.gifId,
      movieconId: posts.movieconId,
      likes: posts.likes,
      latitude: posts.latitude,
      longitude: posts.longitude,
      locationName: posts.locationName,
      address: posts.address,
      createdAt: posts.createdAt,
      updatedAt: posts.updatedAt,
      author: users,
      gif: gifs,
      moviecon: moviecons
    }).from(posts).innerJoin(users, eq(posts.userId, users.id)).leftJoin(gifs, eq(posts.gifId, gifs.id)).leftJoin(moviecons, eq(posts.movieconId, moviecons.id)).where(and(...whereConditions)).orderBy(desc(posts.createdAt));
    const postsData = await postsQuery;
    console.log(`Raw posts query returned ${postsData.length} posts. Latest:`, postsData[0]?.createdAt);
    const postIds = postsData.map((p) => p.id);
    const [allLikes, allComments] = await Promise.all([
      // Batch fetch all likes
      postIds.length > 0 ? db.select().from(postLikes).where(inArray(postLikes.postId, postIds)) : [],
      // Batch fetch all comments with joins
      postIds.length > 0 ? db.select({
        id: comments.id,
        postId: comments.postId,
        userId: comments.userId,
        content: comments.content,
        gifId: comments.gifId,
        movieconId: comments.movieconId,
        createdAt: comments.createdAt,
        author: users,
        gif: gifs,
        moviecon: moviecons
      }).from(comments).innerJoin(users, eq(comments.userId, users.id)).leftJoin(gifs, eq(comments.gifId, gifs.id)).leftJoin(moviecons, eq(comments.movieconId, moviecons.id)).where(inArray(comments.postId, postIds)).orderBy(comments.createdAt) : []
    ]);
    const likesByPost = allLikes.reduce((acc, like2) => {
      if (!acc[like2.postId]) acc[like2.postId] = [];
      acc[like2.postId].push(like2);
      return acc;
    }, {});
    const commentsByPost = allComments.reduce((acc, comment) => {
      if (!acc[comment.postId]) acc[comment.postId] = [];
      acc[comment.postId].push(comment);
      return acc;
    }, {});
    const postsWithDetails = postsData.map((post) => ({
      id: post.id,
      userId: post.userId,
      content: post.content,
      mediaUrl: post.mediaUrl,
      mediaType: post.mediaType,
      gifId: post.gifId,
      movieconId: post.movieconId,
      gif: post.gif,
      moviecon: post.moviecon,
      likes: likesByPost[post.id] || [],
      latitude: post.latitude,
      longitude: post.longitude,
      locationName: post.locationName,
      address: post.address,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      author: post.author,
      comments: commentsByPost[post.id] || []
    }));
    return postsWithDetails;
  }
  // Get aggregated kliq feed including posts, polls, events, and actions
  async getKliqFeed(userId, filters) {
    const userFriends = await this.getFriends(userId);
    const friendIds = userFriends.map((f) => f.friendId);
    friendIds.push(userId);
    const feedItems = [];
    try {
      const [postsData, pollsData, eventsData] = await Promise.all([
        // 1. Get regular posts
        this.getPosts(userId, filters),
        // 2. Get polls from kliq members (optimized query)
        friendIds.length > 0 ? db.select({
          id: polls.id,
          userId: polls.userId,
          title: polls.title,
          description: polls.description,
          options: polls.options,
          expiresAt: polls.expiresAt,
          isActive: polls.isActive,
          createdAt: polls.createdAt,
          authorId: users.id,
          authorFirstName: users.firstName,
          authorLastName: users.lastName,
          authorProfileImageUrl: users.profileImageUrl,
          authorKliqName: users.kliqName
        }).from(polls).innerJoin(users, eq(polls.userId, users.id)).where(inArray(polls.userId, friendIds)).orderBy(desc(polls.createdAt)).limit(50) : [],
        // Limit results for performance
        // 3. Get events from kliq members (optimized query)
        friendIds.length > 0 ? db.select({
          id: events.id,
          userId: events.userId,
          title: events.title,
          description: events.description,
          location: events.location,
          eventDate: events.eventDate,
          mediaUrl: events.mediaUrl,
          mediaType: events.mediaType,
          isPublic: events.isPublic,
          attendeeCount: events.attendeeCount,
          createdAt: events.createdAt,
          authorId: users.id,
          authorFirstName: users.firstName,
          authorLastName: users.lastName,
          authorProfileImageUrl: users.profileImageUrl,
          authorKliqName: users.kliqName
        }).from(events).innerJoin(users, eq(events.userId, users.id)).where(inArray(events.userId, friendIds)).orderBy(desc(events.createdAt)).limit(50) : []
        // Limit results for performance
      ]);
      const actionsData = friendIds.length > 0 ? await db.select({
        id: actions.id,
        userId: actions.userId,
        title: actions.title,
        description: actions.description,
        status: actions.status,
        viewerCount: actions.viewerCount,
        thumbnailUrl: actions.thumbnailUrl,
        createdAt: actions.createdAt,
        authorId: users.id,
        authorFirstName: users.firstName,
        authorLastName: users.lastName,
        authorProfileImageUrl: users.profileImageUrl,
        authorKliqName: users.kliqName
      }).from(actions).innerJoin(users, eq(actions.userId, users.id)).where(inArray(actions.userId, friendIds)).orderBy(desc(actions.createdAt)).limit(50) : [];
      console.log(`Feed: Got ${postsData.length} posts, latest:`, postsData[0]?.createdAt);
      feedItems.push(...postsData.map((post) => ({
        ...post,
        type: "post",
        activityDate: post.createdAt
      })));
      feedItems.push(...pollsData.map((poll) => ({
        id: poll.id,
        userId: poll.userId,
        title: poll.title,
        description: poll.description,
        options: poll.options,
        expiresAt: poll.expiresAt,
        isActive: poll.isActive,
        createdAt: poll.createdAt,
        author: {
          id: poll.authorId,
          firstName: poll.authorFirstName,
          lastName: poll.authorLastName,
          profileImageUrl: poll.authorProfileImageUrl,
          kliqName: poll.authorKliqName
        },
        type: "poll",
        activityDate: poll.createdAt,
        content: `\u{1F5F3}\uFE0F Created a poll: "${poll.title}"`
      })));
      feedItems.push(...eventsData.map((event) => ({
        id: event.id,
        userId: event.userId,
        title: event.title,
        description: event.description,
        location: event.location,
        eventDate: event.eventDate,
        mediaUrl: event.mediaUrl,
        mediaType: event.mediaType,
        isPublic: event.isPublic,
        attendeeCount: event.attendeeCount,
        createdAt: event.createdAt,
        author: {
          id: event.authorId,
          firstName: event.authorFirstName,
          lastName: event.authorLastName,
          profileImageUrl: event.authorProfileImageUrl,
          kliqName: event.authorKliqName
        },
        type: "event",
        activityDate: event.createdAt,
        content: `\u{1F4C5} Created event: "${event.title}"`
      })));
      feedItems.push(...actionsData.map((action) => ({
        id: action.id,
        userId: action.userId,
        title: action.title,
        description: action.description,
        status: action.status,
        viewerCount: action.viewerCount,
        thumbnailUrl: action.thumbnailUrl,
        activityDate: action.createdAt,
        createdAt: action.createdAt,
        author: {
          id: action.authorId,
          firstName: action.authorFirstName,
          lastName: action.authorLastName,
          profileImageUrl: action.authorProfileImageUrl,
          kliqName: action.authorKliqName
        },
        type: "action",
        content: `\u{1F534} ${action.status === "live" ? "Started a live stream" : "Ended a live stream"}: "${action.title}"`
      })));
    } catch (error) {
      console.error("Error fetching kliq feed items:", error);
    }
    return feedItems.sort(
      (a, b) => new Date(b.activityDate).getTime() - new Date(a.activityDate).getTime()
    );
  }
  async getPostById(postId) {
    const [post] = await db.select().from(posts).where(eq(posts.id, postId));
    return post;
  }
  async createPost(post) {
    const [newPost] = await db.insert(posts).values(post).returning();
    return newPost;
  }
  async likePost(postId, userId) {
    await db.insert(postLikes).values({ postId, userId });
    await db.update(posts).set({ likes: sql2`COALESCE(${posts.likes}, 0) + 1` }).where(eq(posts.id, postId));
  }
  async unlikePost(postId, userId) {
    await db.delete(postLikes).where(and(eq(postLikes.postId, postId), eq(postLikes.userId, userId)));
    await db.update(posts).set({ likes: sql2`GREATEST(COALESCE(${posts.likes}, 0) - 1, 0)` }).where(eq(posts.id, postId));
  }
  async getUserReflection(userId) {
    try {
      const thirtyDaysAgo = /* @__PURE__ */ new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const userPosts = await db.select({
        id: posts.id,
        content: posts.content,
        mediaUrl: posts.mediaUrl,
        mediaType: posts.mediaType,
        likes: posts.likes,
        createdAt: posts.createdAt,
        commentCount: count(comments.id)
      }).from(posts).leftJoin(comments, eq(posts.id, comments.postId)).where(
        and(
          eq(posts.userId, userId),
          gte(posts.createdAt, thirtyDaysAgo)
        )
      ).groupBy(posts.id, posts.content, posts.mediaUrl, posts.mediaType, posts.likes, posts.createdAt).orderBy(desc(posts.createdAt));
      if (userPosts.length === 0) {
        return {
          posts: [],
          stats: { totalPosts: 0, totalLikes: 0, totalComments: 0, avgEngagement: 0 },
          message: "No posts found in the last 30 days. Start sharing to build your reflection!"
        };
      }
      const postsWithEngagement = userPosts.map((post) => ({
        ...post,
        engagementScore: (post.likes || 0) + post.commentCount * 2
      }));
      const topPosts = postsWithEngagement.sort((a, b) => b.engagementScore - a.engagementScore).slice(0, 12);
      const totalLikes = userPosts.reduce((sum, post) => sum + (post.likes || 0), 0);
      const totalComments = userPosts.reduce((sum, post) => sum + post.commentCount, 0);
      const avgEngagement = userPosts.length > 0 ? (totalLikes + totalComments) / userPosts.length : 0;
      const stats = {
        totalPosts: userPosts.length,
        totalLikes,
        totalComments,
        avgEngagement: Math.round(avgEngagement * 10) / 10,
        topEngagementScore: topPosts.length > 0 ? topPosts[0].engagementScore : 0
      };
      let reflectionMessage = "";
      if (topPosts.length >= 3) {
        reflectionMessage = `\u{1F31F} Your top ${topPosts.length} posts from the last 30 days! Your best post got ${topPosts[0].engagementScore} engagement points. Keep creating amazing content!`;
      } else if (topPosts.length > 0) {
        reflectionMessage = `\u2728 Here are your ${topPosts.length} posts from the last 30 days. Keep sharing to build your reflection collage!`;
      } else {
        reflectionMessage = "Start posting more to see your viral content reflection!";
      }
      return {
        posts: topPosts,
        stats,
        message: reflectionMessage
      };
    } catch (error) {
      console.error("Error generating user reflection:", error);
      throw new Error("Failed to generate reflection");
    }
  }
  // Comment operations
  async addComment(comment) {
    const [newComment] = await db.insert(comments).values(comment).returning();
    return newComment;
  }
  // Filter operations
  async getContentFilters(userId) {
    return await db.select().from(contentFilters).where(eq(contentFilters.userId, userId));
  }
  async addContentFilter(filter) {
    const [newFilter] = await db.insert(contentFilters).values(filter).returning();
    return newFilter;
  }
  async removeContentFilter(userId, filterId) {
    await db.delete(contentFilters).where(and(eq(contentFilters.userId, userId), eq(contentFilters.id, filterId)));
  }
  // Utility operations
  async generateInviteCode() {
    let code;
    let isUnique = false;
    while (!isUnique) {
      const part1 = Math.random().toString(36).substr(2, 4).toUpperCase();
      const part2 = Math.random().toString(36).substr(2, 4).toUpperCase();
      code = `KLIQ-${part1}-${part2}`;
      const existingUser = await db.select().from(users).where(eq(users.inviteCode, code));
      const usedCode = await db.select().from(usedInviteCodes).where(eq(usedInviteCodes.inviteCode, code));
      isUnique = existingUser.length === 0 && usedCode.length === 0;
    }
    return code;
  }
  async getUserByInviteCode(inviteCode) {
    const [user] = await db.select().from(users).where(eq(users.inviteCode, inviteCode));
    return user;
  }
  async isInviteCodeUsed(inviteCode) {
    const [usedCode] = await db.select().from(usedInviteCodes).where(eq(usedInviteCodes.inviteCode, inviteCode));
    return !!usedCode;
  }
  async markInviteCodeAsUsed(inviteCode, usedBy, ownedBy) {
    await db.insert(usedInviteCodes).values({
      inviteCode,
      usedBy,
      ownedBy
    });
  }
  // Story operations
  async getActiveStories(userId) {
    const userFriends = await this.getFriends(userId);
    const friendIds = userFriends.map((f) => f.friendId);
    friendIds.push(userId);
    const now = /* @__PURE__ */ new Date();
    const storiesData = await db.select({
      id: stories.id,
      userId: stories.userId,
      content: stories.content,
      mediaUrl: stories.mediaUrl,
      mediaType: stories.mediaType,
      viewCount: stories.viewCount,
      createdAt: stories.createdAt,
      expiresAt: stories.expiresAt,
      author: users
    }).from(stories).innerJoin(users, eq(stories.userId, users.id)).where(and(inArray(stories.userId, friendIds), sql2`${stories.expiresAt} > ${now}`)).orderBy(desc(stories.createdAt));
    const storyIds = storiesData.map((s) => s.id);
    const userStoryViews = storyIds.length > 0 ? await db.select({ storyId: storyViews.storyId }).from(storyViews).where(and(inArray(storyViews.storyId, storyIds), eq(storyViews.userId, userId))) : [];
    const viewedStoryIds = new Set(userStoryViews.map((v) => v.storyId));
    const storiesWithViewStatus = storiesData.map((story) => ({
      id: story.id,
      userId: story.userId,
      content: story.content,
      mediaUrl: story.mediaUrl,
      mediaType: story.mediaType,
      viewCount: story.viewCount || 0,
      createdAt: story.createdAt,
      expiresAt: story.expiresAt,
      author: story.author,
      hasViewed: viewedStoryIds.has(story.id)
    }));
    return storiesWithViewStatus;
  }
  async createStory(story) {
    const [newStory] = await db.insert(stories).values(story).returning();
    return newStory;
  }
  async viewStory(storyId, userId) {
    const [existingView] = await db.select().from(storyViews).where(and(eq(storyViews.storyId, storyId), eq(storyViews.userId, userId))).limit(1);
    if (!existingView) {
      await db.insert(storyViews).values({ storyId, userId });
      await db.update(stories).set({ viewCount: sql2`${stories.viewCount} + 1` }).where(eq(stories.id, storyId));
    }
  }
  async deleteExpiredStories() {
    const now = /* @__PURE__ */ new Date();
    await db.delete(stories).where(sql2`${stories.expiresAt} < ${now}`);
  }
  // Clean up expired polls
  async cleanUpExpiredPolls() {
    const now = /* @__PURE__ */ new Date();
    const expiredPolls = await db.select({ id: polls.id }).from(polls).where(sql2`${polls.expiresAt} < ${now}`);
    if (expiredPolls.length === 0) {
      console.log(`No expired polls to clean up at ${now.toISOString()}`);
      return;
    }
    const expiredPollIds = expiredPolls.map((p) => p.id);
    await db.delete(pollVotes).where(inArray(pollVotes.pollId, expiredPollIds));
    const result = await db.delete(polls).where(sql2`${polls.expiresAt} < ${now}`);
    console.log(`Cleaned up ${expiredPolls.length} expired polls and their votes at ${now.toISOString()}`);
  }
  // Clean up expired events
  async cleanUpExpiredEvents() {
    const now = /* @__PURE__ */ new Date();
    const expiredEvents = await db.select({ id: events.id }).from(events).where(sql2`${events.eventDate} < ${now}`);
    if (expiredEvents.length === 0) {
      console.log(`No expired events to clean up at ${now.toISOString()}`);
      return;
    }
    const expiredEventIds = expiredEvents.map((e) => e.id);
    await db.delete(eventAttendees).where(inArray(eventAttendees.eventId, expiredEventIds));
    const result = await db.delete(events).where(sql2`${events.eventDate} < ${now}`);
    console.log(`Cleaned up ${expiredEvents.length} expired events and their attendees at ${now.toISOString()}`);
  }
  // Message operations
  async getConversations(userId) {
    const userConversations = await db.select().from(conversations).where(or(eq(conversations.user1Id, userId), eq(conversations.user2Id, userId))).orderBy(desc(conversations.lastActivity));
    const otherUserIds = userConversations.map(
      (conv) => conv.user1Id === userId ? conv.user2Id : conv.user1Id
    );
    const lastMessageIds = userConversations.filter((conv) => conv.lastMessageId).map((conv) => conv.lastMessageId);
    const [allOtherUsers, allLastMessages, allUnreadCounts] = await Promise.all([
      // Batch fetch all other users
      otherUserIds.length > 0 ? db.select().from(users).where(inArray(users.id, otherUserIds)) : [],
      // Batch fetch all last messages
      lastMessageIds.length > 0 ? db.select().from(messages).where(inArray(messages.id, lastMessageIds)) : [],
      // Batch fetch unread counts for all conversations
      Promise.all(userConversations.map(async (conv) => {
        const otherUserId = conv.user1Id === userId ? conv.user2Id : conv.user1Id;
        const now = /* @__PURE__ */ new Date();
        const result = await db.select({ count: sql2`count(*)` }).from(messages).where(
          and(
            eq(messages.receiverId, userId),
            or(eq(messages.senderId, otherUserId), eq(messages.receiverId, otherUserId)),
            eq(messages.isRead, false),
            or(
              sql2`${messages.expiresAt} IS NULL`,
              sql2`${messages.expiresAt} > ${now}`
            )
          )
        );
        return { conversationId: conv.id, count: Number(result[0]?.count) || 0 };
      }))
    ]);
    const userMap = allOtherUsers.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
    const messageMap = allLastMessages.reduce((acc, msg) => {
      acc[msg.id] = msg;
      return acc;
    }, {});
    const unreadMap = allUnreadCounts.reduce((acc, item) => {
      acc[item.conversationId] = item.count;
      return acc;
    }, {});
    const conversationsWithDetails = userConversations.map((conv) => {
      const otherUserId = conv.user1Id === userId ? conv.user2Id : conv.user1Id;
      const otherUser = userMap[otherUserId];
      const lastMessage = conv.lastMessageId ? messageMap[conv.lastMessageId] : void 0;
      return {
        ...conv,
        otherParticipant: otherUser,
        // Use otherParticipant to match route expectation
        otherUser,
        lastMessage,
        unreadCount: unreadMap[conv.id] || 0
      };
    });
    return conversationsWithDetails.filter((conv) => conv.otherUser);
  }
  async getConversation(userId, otherUserId) {
    const [conversation] = await db.select().from(conversations).where(
      or(
        and(eq(conversations.user1Id, userId), eq(conversations.user2Id, otherUserId)),
        and(eq(conversations.user1Id, otherUserId), eq(conversations.user2Id, userId))
      )
    );
    if (!conversation) {
      return void 0;
    }
    const now = /* @__PURE__ */ new Date();
    const conversationMessages = await db.select({
      message: messages,
      sender: users,
      gif: gifs,
      moviecon: moviecons
    }).from(messages).innerJoin(users, eq(messages.senderId, users.id)).leftJoin(gifs, eq(messages.gifId, gifs.id)).leftJoin(moviecons, eq(messages.movieconId, moviecons.id)).where(
      and(
        or(
          and(eq(messages.senderId, userId), eq(messages.receiverId, otherUserId)),
          and(eq(messages.senderId, otherUserId), eq(messages.receiverId, userId))
        ),
        or(
          sql2`${messages.expiresAt} IS NULL`,
          sql2`${messages.expiresAt} > ${now}`
        )
      )
    ).orderBy(desc(messages.createdAt));
    const messagesWithUsers = await Promise.all(
      conversationMessages.map(async ({ message, sender, gif, moviecon }) => {
        const [receiver] = await db.select().from(users).where(eq(users.id, message.receiverId));
        return {
          ...message,
          sender,
          receiver,
          gif,
          moviecon
        };
      })
    );
    return {
      ...conversation,
      messages: messagesWithUsers
    };
  }
  async sendMessage(message) {
    const [existingConversation] = await db.select().from(conversations).where(
      or(
        and(eq(conversations.user1Id, message.senderId), eq(conversations.user2Id, message.receiverId)),
        and(eq(conversations.user1Id, message.receiverId), eq(conversations.user2Id, message.senderId))
      )
    );
    let conversationId;
    if (existingConversation) {
      conversationId = existingConversation.id;
    } else {
      const [newConversation] = await db.insert(conversations).values({
        user1Id: message.senderId,
        user2Id: message.receiverId
      }).returning();
      conversationId = newConversation.id;
    }
    const [newMessage] = await db.insert(messages).values(message).returning();
    await db.update(conversations).set({
      lastMessageId: newMessage.id,
      lastActivity: /* @__PURE__ */ new Date()
    }).where(eq(conversations.id, conversationId));
    return newMessage;
  }
  async markMessageAsRead(messageId) {
    const readAt = /* @__PURE__ */ new Date();
    const expiresAt = new Date(readAt.getTime() + 3 * 60 * 1e3);
    await db.update(messages).set({
      isRead: true,
      readAt,
      expiresAt
    }).where(eq(messages.id, messageId));
  }
  async markConversationAsRead(conversationId, userId) {
    const [conversation] = await db.select().from(conversations).where(eq(conversations.id, conversationId));
    if (!conversation) {
      throw new Error("Conversation not found");
    }
    const otherUserId = conversation.user1Id === userId ? conversation.user2Id : conversation.user1Id;
    const readAt = /* @__PURE__ */ new Date();
    const expiresAt = new Date(readAt.getTime() + 3 * 60 * 1e3);
    const result = await db.update(messages).set({
      isRead: true,
      readAt,
      expiresAt
    }).where(
      and(
        eq(messages.receiverId, userId),
        eq(messages.senderId, otherUserId),
        eq(messages.isRead, false)
      )
    );
    console.log(`Marked messages as read in conversation ${conversationId} for user ${userId}.`);
  }
  async createConversation(data) {
    const [userId1, userId2] = data.participantIds;
    const [conversation] = await db.insert(conversations).values({
      user1Id: userId1,
      user2Id: userId2
    }).returning();
    return { id: conversation.id };
  }
  async deleteExpiredMessages() {
    const now = /* @__PURE__ */ new Date();
    const expiredMessages = await db.select({ id: messages.id }).from(messages).where(sql2`${messages.expiresAt} < ${now}`);
    if (expiredMessages.length === 0) {
      console.log(`No expired messages to clean up at ${now.toISOString()}`);
      return;
    }
    const expiredMessageIds = expiredMessages.map((m) => m.id);
    await db.update(conversations).set({ lastMessageId: null }).where(inArray(conversations.lastMessageId, expiredMessageIds));
    const result = await db.delete(messages).where(sql2`${messages.expiresAt} < ${now}`);
    console.log(`Cleaned up ${expiredMessages.length} expired messages at ${now.toISOString()}`);
  }
  async deleteOldConversations() {
    const now = /* @__PURE__ */ new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1e3);
    const oldConversations = await db.select({
      id: conversations.id,
      user1Id: conversations.user1Id,
      user2Id: conversations.user2Id
    }).from(conversations).where(lt(conversations.lastActivity, sevenDaysAgo));
    if (oldConversations.length === 0) {
      console.log(`No old conversations to clean up at ${now.toISOString()}`);
      return;
    }
    const oldConversationIds = oldConversations.map((c) => c.id);
    await db.update(conversations).set({ lastMessageId: null }).where(inArray(conversations.id, oldConversationIds));
    let messagesDeletedCount = 0;
    for (const conv of oldConversations) {
      const messagesResult = await db.delete(messages).where(
        or(
          and(eq(messages.senderId, conv.user1Id), eq(messages.receiverId, conv.user2Id)),
          and(eq(messages.senderId, conv.user2Id), eq(messages.receiverId, conv.user1Id))
        )
      );
      messagesDeletedCount += messagesResult.rowCount || 0;
    }
    const conversationsResult = await db.delete(conversations).where(lt(conversations.lastActivity, sevenDaysAgo));
    console.log(`Cleaned up ${oldConversations.length} old conversations and ${messagesDeletedCount} messages at ${now.toISOString()}`);
  }
  // Event operations
  async getEvents(userId) {
    const userFriends = await this.getFriends(userId);
    const friendIds = userFriends.map((f) => f.friendId);
    const userIds = [...friendIds, userId];
    const eventsData = await db.select({
      event: events,
      author: users
    }).from(events).innerJoin(users, eq(events.userId, users.id)).where(inArray(events.userId, userIds)).orderBy(events.eventDate);
    const eventIds = eventsData.map(({ event }) => event.id);
    const allAttendees = eventIds.length > 0 ? await db.select({
      attendee: eventAttendees,
      user: users
    }).from(eventAttendees).innerJoin(users, eq(eventAttendees.userId, users.id)).where(inArray(eventAttendees.eventId, eventIds)) : [];
    const attendeesByEvent = allAttendees.reduce((acc, { attendee, user }) => {
      if (!acc[attendee.eventId]) acc[attendee.eventId] = [];
      acc[attendee.eventId].push({ ...attendee, user });
      return acc;
    }, {});
    const eventsWithAttendees = eventsData.map(({ event, author }) => ({
      ...event,
      author,
      attendees: attendeesByEvent[event.id] || []
    }));
    return eventsWithAttendees;
  }
  async getEventById(eventId) {
    const [event] = await db.select().from(events).where(eq(events.id, eventId));
    return event;
  }
  async createEvent(event) {
    const [newEvent] = await db.insert(events).values(event).returning();
    await db.insert(eventAttendees).values({
      eventId: newEvent.id,
      userId: event.userId,
      status: "going"
    });
    await db.update(events).set({ attendeeCount: 1 }).where(eq(events.id, newEvent.id));
    const eventDate = new Date(newEvent.eventDate);
    const formattedDate = eventDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: eventDate.getFullYear() !== (/* @__PURE__ */ new Date()).getFullYear() ? "numeric" : void 0
    });
    const formattedTime = eventDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    });
    let postContent = `\u{1F4C5} Created an event: "${newEvent.title}"`;
    if (newEvent.location) {
      postContent += `
\u{1F4CD} ${newEvent.location}`;
    }
    postContent += `
\u{1F552} ${formattedDate} at ${formattedTime}`;
    if (newEvent.description) {
      postContent += `

${newEvent.description}`;
    }
    await this.createPost({
      userId: event.userId,
      content: postContent,
      mediaUrl: newEvent.mediaUrl || null,
      mediaType: newEvent.mediaType || null
    });
    return newEvent;
  }
  async updateEvent(eventId, updates) {
    console.log(`Updating event ${eventId} with:`, updates);
    const originalEvent = await this.getEventById(eventId);
    console.log(`Original event found:`, originalEvent);
    const [updatedEvent] = await db.update(events).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(events.id, eventId)).returning();
    console.log(`Event updated successfully:`, updatedEvent);
    if (originalEvent) {
      console.log(`Creating auto-post for event update...`);
      try {
        const eventDate = new Date(updatedEvent.eventDate);
        const formattedDate = eventDate.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: eventDate.getFullYear() !== (/* @__PURE__ */ new Date()).getFullYear() ? "numeric" : void 0
        });
        const formattedTime = eventDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit"
        });
        let postContent = `\u270F\uFE0F Updated event: "${updatedEvent.title}"`;
        if (updatedEvent.location) {
          postContent += `
\u{1F4CD} ${updatedEvent.location}`;
        }
        postContent += `
\u{1F552} ${formattedDate} at ${formattedTime}`;
        if (updatedEvent.description) {
          postContent += `

${updatedEvent.description}`;
        }
        console.log(`Auto-post content:`, postContent);
        const autoPost = await this.createPost({
          userId: updatedEvent.userId,
          content: postContent,
          mediaUrl: updatedEvent.mediaUrl || null,
          mediaType: updatedEvent.mediaType || null
        });
        console.log(`Auto-post created successfully:`, autoPost);
      } catch (error) {
        console.error(`Error creating auto-post for event update:`, error);
      }
    } else {
      console.log(`No original event found, skipping auto-post`);
    }
    return updatedEvent;
  }
  async getUserEventAttendance(eventId, userId) {
    const [attendance] = await db.select().from(eventAttendees).where(and(eq(eventAttendees.eventId, eventId), eq(eventAttendees.userId, userId))).limit(1);
    return attendance && attendance.status ? { status: attendance.status } : void 0;
  }
  async updateEventAttendance(eventId, userId, status) {
    const [existingAttendance] = await db.select().from(eventAttendees).where(and(eq(eventAttendees.eventId, eventId), eq(eventAttendees.userId, userId))).limit(1);
    if (existingAttendance) {
      await db.update(eventAttendees).set({ status }).where(and(eq(eventAttendees.eventId, eventId), eq(eventAttendees.userId, userId)));
    } else {
      await db.insert(eventAttendees).values({
        eventId,
        userId,
        status
      });
    }
    const attendeeCount = await db.select({ count: sql2`count(*)` }).from(eventAttendees).where(and(eq(eventAttendees.eventId, eventId), eq(eventAttendees.status, "going"))).then((result) => Number(result[0]?.count) || 0);
    await db.update(events).set({ attendeeCount }).where(eq(events.id, eventId));
  }
  async getEventAttendees(eventId) {
    const attendees = await db.select().from(eventAttendees).where(eq(eventAttendees.eventId, eventId));
    return attendees;
  }
  // Action (Live Stream) operations
  async getActions() {
    const allActions = await db.select({
      action: actions,
      author: users
    }).from(actions).leftJoin(users, eq(actions.userId, users.id)).where(eq(actions.status, "live")).orderBy(desc(actions.createdAt));
    const actionIds = allActions.map(({ action }) => action.id);
    const allViewers = actionIds.length > 0 ? await db.select().from(actionViewers).where(and(inArray(actionViewers.actionId, actionIds), sql2`left_at IS NULL`)) : [];
    const viewersByAction = allViewers.reduce((acc, viewer) => {
      if (!acc[viewer.actionId]) acc[viewer.actionId] = [];
      acc[viewer.actionId].push(viewer);
      return acc;
    }, {});
    const actionsWithViewers = allActions.map(({ action, author }) => {
      const viewers = viewersByAction[action.id] || [];
      return {
        ...action,
        author,
        viewers,
        viewerCount: viewers.length
      };
    });
    return actionsWithViewers;
  }
  async getActionById(actionId) {
    const [action] = await db.select().from(actions).where(eq(actions.id, actionId));
    return action;
  }
  async createAction(action) {
    const streamKey = randomUUID();
    const [newAction] = await db.insert(actions).values({
      ...action,
      streamKey
    }).returning();
    return newAction;
  }
  async endAction(actionId) {
    await db.update(actionViewers).set({ leftAt: /* @__PURE__ */ new Date() }).where(and(eq(actionViewers.actionId, actionId), sql2`left_at IS NULL`));
    const [endedAction] = await db.update(actions).set({
      status: "ended",
      endedAt: /* @__PURE__ */ new Date(),
      viewerCount: 0
    }).where(eq(actions.id, actionId)).returning();
    return endedAction;
  }
  async joinAction(actionId, userId) {
    const [existingViewer] = await db.select().from(actionViewers).where(and(
      eq(actionViewers.actionId, actionId),
      eq(actionViewers.userId, userId),
      sql2`left_at IS NULL`
    )).limit(1);
    if (!existingViewer) {
      await db.insert(actionViewers).values({
        actionId,
        userId
      });
      const viewerCount = await db.select({ count: sql2`count(*)` }).from(actionViewers).where(and(eq(actionViewers.actionId, actionId), sql2`left_at IS NULL`)).then((result) => Number(result[0]?.count) || 0);
      await db.update(actions).set({ viewerCount }).where(eq(actions.id, actionId));
    }
  }
  async leaveAction(actionId, userId) {
    await db.update(actionViewers).set({ leftAt: /* @__PURE__ */ new Date() }).where(and(
      eq(actionViewers.actionId, actionId),
      eq(actionViewers.userId, userId),
      sql2`left_at IS NULL`
    ));
    const viewerCount = await db.select({ count: sql2`count(*)` }).from(actionViewers).where(and(eq(actionViewers.actionId, actionId), sql2`left_at IS NULL`)).then((result) => Number(result[0]?.count) || 0);
    await db.update(actions).set({ viewerCount }).where(eq(actions.id, actionId));
  }
  async addActionChatMessage(message) {
    const [newMessage] = await db.insert(actionChatMessages).values(message).returning();
    return newMessage;
  }
  async getActionChatMessages(actionId) {
    const messages2 = await db.select({
      message: actionChatMessages,
      user: users
    }).from(actionChatMessages).leftJoin(users, eq(actionChatMessages.userId, users.id)).where(eq(actionChatMessages.actionId, actionId)).orderBy(actionChatMessages.createdAt);
    return messages2.map(({ message, user }) => ({
      ...message,
      user
    }));
  }
  // Meetup operations
  async getMeetups(userId) {
    const userFriends = await this.getFriends(userId);
    const friendIds = userFriends.map((f) => f.friendId);
    const userIds = [...friendIds, userId];
    const meetupsData = await db.select({
      meetup: meetups,
      organizer: users
    }).from(meetups).innerJoin(users, eq(meetups.userId, users.id)).where(inArray(meetups.userId, userIds)).orderBy(desc(meetups.meetupTime));
    const meetupIds = meetupsData.map(({ meetup }) => meetup.id);
    const allCheckIns = meetupIds.length > 0 ? await db.select({
      checkIn: meetupCheckIns,
      user: users
    }).from(meetupCheckIns).innerJoin(users, eq(meetupCheckIns.userId, users.id)).where(inArray(meetupCheckIns.meetupId, meetupIds)) : [];
    const checkInsByMeetup = allCheckIns.reduce((acc, { checkIn, user }) => {
      if (!acc[checkIn.meetupId]) acc[checkIn.meetupId] = [];
      acc[checkIn.meetupId].push({ ...checkIn, user });
      return acc;
    }, {});
    const meetupsWithCheckIns = meetupsData.map(({ meetup, organizer }) => ({
      ...meetup,
      organizer,
      checkIns: checkInsByMeetup[meetup.id] || []
    }));
    return meetupsWithCheckIns;
  }
  async getMeetupById(meetupId) {
    const [meetup] = await db.select().from(meetups).where(eq(meetups.id, meetupId));
    return meetup;
  }
  async createMeetup(meetup) {
    const [newMeetup] = await db.insert(meetups).values({
      ...meetup,
      isActive: true
    }).returning();
    return newMeetup;
  }
  async endMeetup(meetupId) {
    const [updatedMeetup] = await db.update(meetups).set({
      isActive: false,
      endedAt: /* @__PURE__ */ new Date()
    }).where(eq(meetups.id, meetupId)).returning();
    return updatedMeetup;
  }
  async checkInToMeetup(checkIn) {
    const [newCheckIn] = await db.insert(meetupCheckIns).values({
      ...checkIn,
      checkInTime: /* @__PURE__ */ new Date(),
      isVerified: false
      // Will be verified separately based on location
    }).returning();
    return newCheckIn;
  }
  async checkOutFromMeetup(meetupId, userId) {
    await db.update(meetupCheckIns).set({ checkOutTime: /* @__PURE__ */ new Date() }).where(and(
      eq(meetupCheckIns.meetupId, meetupId),
      eq(meetupCheckIns.userId, userId),
      sql2`check_out_time IS NULL`
    ));
  }
  async getNearbyMeetups(latitude, longitude, radiusKm) {
    const nearbyMeetupsData = await db.select({
      meetup: meetups,
      organizer: users
    }).from(meetups).innerJoin(users, eq(meetups.userId, users.id)).where(and(
      eq(meetups.isActive, true),
      sql2`(
          6371 * acos(
            cos(radians(${latitude})) * 
            cos(radians(${meetups.latitude})) * 
            cos(radians(${meetups.longitude}) - radians(${longitude})) + 
            sin(radians(${latitude})) * 
            sin(radians(${meetups.latitude}))
          )
        ) <= ${radiusKm}`
    )).orderBy(desc(meetups.meetupTime));
    const nearbyMeetupsWithCheckIns = await Promise.all(
      nearbyMeetupsData.map(async ({ meetup, organizer }) => {
        const checkInsData = await db.select({
          checkIn: meetupCheckIns,
          user: users
        }).from(meetupCheckIns).innerJoin(users, eq(meetupCheckIns.userId, users.id)).where(eq(meetupCheckIns.meetupId, meetup.id));
        const checkIns = checkInsData.map(({ checkIn, user }) => ({
          ...checkIn,
          user
        }));
        return {
          ...meetup,
          organizer,
          checkIns
        };
      })
    );
    return nearbyMeetupsWithCheckIns;
  }
  async verifyLocationCheckIn(meetupId, userId, latitude, longitude) {
    const meetup = await this.getMeetupById(meetupId);
    if (!meetup) return false;
    const radiusKm = 0.1;
    const distance = await db.select({
      distance: sql2`(
          6371 * acos(
            cos(radians(${latitude})) * 
            cos(radians(${meetup.latitude})) * 
            cos(radians(${meetup.longitude}) - radians(${longitude})) + 
            sin(radians(${latitude})) * 
            sin(radians(${meetup.latitude}))
          )
        )`
    }).from(meetups).where(eq(meetups.id, meetupId));
    const isWithinRange = distance[0]?.distance <= radiusKm;
    if (isWithinRange) {
      await db.update(meetupCheckIns).set({ isVerified: true }).where(and(
        eq(meetupCheckIns.meetupId, meetupId),
        eq(meetupCheckIns.userId, userId)
      ));
    }
    return isWithinRange;
  }
  // Birthday operations
  async getUsersWithBirthdayToday() {
    const today = /* @__PURE__ */ new Date();
    const monthDay = `${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
    return await db.select().from(users).where(sql2`to_char(${users.birthdate}, 'MM-DD') = ${monthDay}`);
  }
  async createBirthdayMessage(message) {
    const [birthdayMessage] = await db.insert(birthdayMessages).values(message).returning();
    return birthdayMessage;
  }
  async getBirthdayMessagesSentThisYear(birthdayUserId, year) {
    return await db.select().from(birthdayMessages).where(and(
      eq(birthdayMessages.birthdayUserId, birthdayUserId),
      eq(birthdayMessages.year, year)
    ));
  }
  async getAllUsers() {
    return await db.select().from(users);
  }
  // Video call operations
  async createVideoCall(call) {
    const [videoCall] = await db.insert(videoCalls).values(call).returning();
    return videoCall;
  }
  async getVideoCall(callId) {
    const [call] = await db.select().from(videoCalls).where(eq(videoCalls.id, callId));
    return call;
  }
  async updateVideoCallStatus(callId, status, startedAt, endedAt) {
    await db.update(videoCalls).set({
      status,
      ...startedAt && { startedAt },
      ...endedAt && { endedAt },
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(videoCalls.id, callId));
  }
  async addCallParticipant(participant) {
    const [callParticipant] = await db.insert(callParticipants).values(participant).returning();
    return callParticipant;
  }
  async updateParticipantStatus(callId, userId, status, joinedAt, leftAt) {
    await db.update(callParticipants).set({
      status,
      ...joinedAt && { joinedAt },
      ...leftAt && { leftAt }
    }).where(and(
      eq(callParticipants.callId, callId),
      eq(callParticipants.userId, userId)
    ));
  }
  async getCallParticipants(callId) {
    return await db.select({
      id: callParticipants.id,
      callId: callParticipants.callId,
      userId: callParticipants.userId,
      status: callParticipants.status,
      joinedAt: callParticipants.joinedAt,
      leftAt: callParticipants.leftAt,
      createdAt: callParticipants.createdAt,
      user: users
    }).from(callParticipants).innerJoin(users, eq(callParticipants.userId, users.id)).where(eq(callParticipants.callId, callId));
  }
  async getUserActiveCalls(userId) {
    const callsQuery = await db.select({
      call: videoCalls
    }).from(videoCalls).innerJoin(callParticipants, eq(videoCalls.id, callParticipants.callId)).where(and(
      eq(callParticipants.userId, userId),
      inArray(videoCalls.status, ["pending", "active"])
    ));
    const callIds = callsQuery.map(({ call }) => call.id);
    const allParticipants = callIds.length > 0 ? await db.select({
      participant: callParticipants,
      user: users
    }).from(callParticipants).innerJoin(users, eq(callParticipants.userId, users.id)).where(inArray(callParticipants.callId, callIds)) : [];
    const participantsByCall = allParticipants.reduce((acc, { participant, user }) => {
      if (!acc[participant.callId]) acc[participant.callId] = [];
      acc[participant.callId].push({ ...participant, user });
      return acc;
    }, {});
    const callsWithParticipants = callsQuery.map(({ call }) => ({
      ...call,
      participants: participantsByCall[call.id] || []
    }));
    return callsWithParticipants;
  }
  // GIF operations
  async getAllGifs() {
    return await db.select().from(gifs).orderBy(desc(gifs.createdAt));
  }
  async getGifsByCategory(category) {
    return await db.select().from(gifs).where(eq(gifs.category, category)).orderBy(desc(gifs.createdAt));
  }
  async getTrendingGifs() {
    return await db.select().from(gifs).where(eq(gifs.trending, true)).orderBy(desc(gifs.createdAt));
  }
  async getFeaturedGifs() {
    return await db.select().from(gifs).where(eq(gifs.featured, true)).orderBy(desc(gifs.createdAt));
  }
  async searchGifs(query) {
    const searchTerm = `%${query}%`;
    return await db.select().from(gifs).where(or(
      like(gifs.title, searchTerm),
      like(gifs.category, searchTerm)
    )).orderBy(desc(gifs.createdAt));
  }
  async getGifById(id) {
    const [gif] = await db.select().from(gifs).where(eq(gifs.id, id));
    return gif;
  }
  async createGif(gif) {
    const [newGif] = await db.insert(gifs).values(gif).returning();
    return newGif;
  }
  async updateGif(id, updates) {
    const [updatedGif] = await db.update(gifs).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(gifs.id, id)).returning();
    return updatedGif;
  }
  async deleteGif(id) {
    await db.delete(gifs).where(eq(gifs.id, id));
  }
  // Moviecon operations
  async getAllMoviecons() {
    return await db.select().from(moviecons).orderBy(desc(moviecons.createdAt));
  }
  async getMovieconsByCategory(category) {
    return await db.select().from(moviecons).where(eq(moviecons.category, category)).orderBy(desc(moviecons.createdAt));
  }
  async getTrendingMoviecons() {
    return await db.select().from(moviecons).where(eq(moviecons.trending, true)).orderBy(desc(moviecons.createdAt));
  }
  async getFeaturedMoviecons() {
    return await db.select().from(moviecons).where(eq(moviecons.featured, true)).orderBy(desc(moviecons.createdAt));
  }
  async searchMoviecons(query) {
    const searchTerm = `%${query}%`;
    return await db.select().from(moviecons).where(or(
      like(moviecons.title, searchTerm),
      like(moviecons.category, searchTerm),
      like(moviecons.movieSource, searchTerm)
    )).orderBy(desc(moviecons.createdAt));
  }
  async getMovieconById(id) {
    const [moviecon] = await db.select().from(moviecons).where(eq(moviecons.id, id));
    return moviecon;
  }
  async createMoviecon(moviecon) {
    const [newMoviecon] = await db.insert(moviecons).values(moviecon).returning();
    return newMoviecon;
  }
  async updateMoviecon(id, updates) {
    const [updatedMoviecon] = await db.update(moviecons).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(moviecons.id, id)).returning();
    return updatedMoviecon;
  }
  async deleteMoviecon(id) {
    await db.delete(moviecons).where(eq(moviecons.id, id));
  }
  // Poll operations
  async getPolls(userId) {
    const userPolls = await db.select({
      poll: polls,
      author: users
    }).from(polls).innerJoin(users, eq(polls.userId, users.id)).where(eq(polls.isActive, true)).orderBy(desc(polls.createdAt));
    const pollIds = userPolls.map(({ poll }) => poll.id);
    const allVotes = pollIds.length > 0 ? await db.select().from(pollVotes).where(inArray(pollVotes.pollId, pollIds)) : [];
    const votesByPoll = allVotes.reduce((acc, vote) => {
      if (!acc[vote.pollId]) acc[vote.pollId] = [];
      acc[vote.pollId].push(vote);
      return acc;
    }, {});
    const pollsWithVotes = userPolls.map(({ poll, author }) => {
      const votes = votesByPoll[poll.id] || [];
      const userVote = votes.find((vote) => vote.userId === userId);
      return {
        ...poll,
        author,
        votes,
        totalVotes: votes.length,
        userVote
      };
    });
    return pollsWithVotes;
  }
  async getPollById(pollId) {
    const [poll] = await db.select().from(polls).where(eq(polls.id, pollId));
    return poll;
  }
  async createPoll(poll) {
    const [newPoll] = await db.insert(polls).values(poll).returning();
    return newPoll;
  }
  async votePoll(vote) {
    const existingVote = await this.getUserPollVote(vote.pollId, vote.userId);
    if (existingVote) {
      const [updatedVote] = await db.update(pollVotes).set({ selectedOption: vote.selectedOption }).where(and(eq(pollVotes.pollId, vote.pollId), eq(pollVotes.userId, vote.userId))).returning();
      return updatedVote;
    } else {
      const [newVote] = await db.insert(pollVotes).values(vote).returning();
      return newVote;
    }
  }
  async getUserPollVote(pollId, userId) {
    const [vote] = await db.select().from(pollVotes).where(and(eq(pollVotes.pollId, pollId), eq(pollVotes.userId, userId)));
    return vote;
  }
  async getPollResults(pollId) {
    const poll = await this.getPollById(pollId);
    if (!poll) return [];
    const votes = await db.select().from(pollVotes).where(eq(pollVotes.pollId, pollId));
    const totalVotes = votes.length;
    console.log(`Fresh poll data for ${pollId}: Total votes = ${totalVotes}, Vote records:`, votes.map((v) => ({ userId: v.userId, option: v.selectedOption })));
    const results = poll.options.map((option, index2) => {
      const optionVotes = votes.filter((vote) => vote.selectedOption === index2).length;
      const percentage = totalVotes > 0 ? optionVotes / totalVotes * 100 : 0;
      return {
        option,
        index: index2,
        votes: optionVotes,
        percentage: Math.round(percentage * 10) / 10
        // Round to 1 decimal place
      };
    });
    console.log(`Calculated results for ${pollId}:`, results);
    return results;
  }
  // Sponsored Ads operations
  async getAllAds() {
    return await db.select().from(sponsoredAds).orderBy(desc(sponsoredAds.createdAt));
  }
  async createAd(adData) {
    const [ad] = await db.insert(sponsoredAds).values(adData).returning();
    return ad;
  }
  async updateAd(id, adData) {
    const [ad] = await db.update(sponsoredAds).set({ ...adData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(sponsoredAds.id, id)).returning();
    return ad;
  }
  async updateAdStatus(id, status) {
    const [ad] = await db.update(sponsoredAds).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq(sponsoredAds.id, id)).returning();
    return ad;
  }
  async deleteAd(id) {
    await db.delete(sponsoredAds).where(eq(sponsoredAds.id, id));
  }
  async getTargetedAds(userId) {
    const user = await this.getUser(userId);
    if (!user) return [];
    const userPrefs = await this.getUserAdPreferences(userId);
    if (userPrefs && !userPrefs.enableTargetedAds) {
      return [];
    }
    let userAge;
    if (user.birthdate) {
      const today = /* @__PURE__ */ new Date();
      const birthDate = new Date(user.birthdate);
      userAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        userAge--;
      }
    }
    const allAds = await db.select().from(sponsoredAds).where(
      and(
        eq(sponsoredAds.status, "active"),
        or(
          isNull(sponsoredAds.startDate),
          lte(sponsoredAds.startDate, /* @__PURE__ */ new Date())
        ),
        or(
          isNull(sponsoredAds.endDate),
          gte(sponsoredAds.endDate, /* @__PURE__ */ new Date())
        )
      )
    ).orderBy(desc(sponsoredAds.priority), desc(sponsoredAds.createdAt));
    const targetedAds = allAds.filter((ad) => {
      if (userPrefs?.blockedCategories?.includes(ad.category)) {
        return false;
      }
      let score = 0;
      if (ad.targetAgeMin || ad.targetAgeMax) {
        if (userAge) {
          if (ad.targetAgeMin && userAge < ad.targetAgeMin) return false;
          if (ad.targetAgeMax && userAge > ad.targetAgeMax) return false;
          score += 2;
        } else {
          score += 1;
        }
      }
      if (ad.targetInterests?.length && user.interests?.length) {
        const commonInterests = ad.targetInterests.filter(
          (interest) => user.interests?.some(
            (userInterest) => userInterest.toLowerCase().includes(interest.toLowerCase()) || interest.toLowerCase().includes(userInterest.toLowerCase())
          )
        );
        if (commonInterests.length > 0) {
          score += commonInterests.length * 3;
        }
      }
      if (ad.targetMusicGenres?.length && user.musicGenres?.length) {
        const commonGenres = ad.targetMusicGenres.filter(
          (genre) => user.musicGenres?.some(
            (userGenre) => userGenre.toLowerCase().includes(genre.toLowerCase()) || genre.toLowerCase().includes(userGenre.toLowerCase())
          )
        );
        if (commonGenres.length > 0) {
          score += commonGenres.length * 2;
        }
      }
      if (ad.targetHobbies?.length && user.hobbies?.length) {
        const commonHobbies = ad.targetHobbies.filter(
          (hobby) => user.hobbies?.some(
            (userHobby) => userHobby.toLowerCase().includes(hobby.toLowerCase()) || hobby.toLowerCase().includes(userHobby.toLowerCase())
          )
        );
        if (commonHobbies.length > 0) {
          score += commonHobbies.length * 2;
        }
      }
      if (ad.targetRelationshipStatus?.length && user.relationshipStatus) {
        if (ad.targetRelationshipStatus.includes(user.relationshipStatus)) {
          score += 2;
        }
      }
      if (ad.targetPetPreferences?.length && user.petPreferences) {
        if (ad.targetPetPreferences.includes(user.petPreferences)) {
          score += 1;
        }
      }
      if (ad.targetLifestyle?.length && user.lifestyle) {
        if (ad.targetLifestyle.includes(user.lifestyle)) {
          score += 1;
        }
      }
      return score > 0 || !ad.targetInterests?.length && !ad.targetMusicGenres?.length && !ad.targetHobbies?.length && !ad.targetRelationshipStatus?.length && !ad.targetPetPreferences?.length && !ad.targetLifestyle?.length && !ad.targetAgeMin && !ad.targetAgeMax;
    });
    const maxAdsPerDay = userPrefs?.maxAdsPerDay || 5;
    return targetedAds.slice(0, maxAdsPerDay);
  }
  async getAllActiveAds() {
    return await db.select().from(sponsoredAds).where(eq(sponsoredAds.status, "active")).orderBy(desc(sponsoredAds.priority), desc(sponsoredAds.createdAt));
  }
  async createSponsoredAd(ad) {
    const [newAd] = await db.insert(sponsoredAds).values(ad).returning();
    return newAd;
  }
  async updateSponsoredAd(adId, updates) {
    const [updatedAd] = await db.update(sponsoredAds).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(sponsoredAds.id, adId)).returning();
    return updatedAd;
  }
  async deleteSponsoredAd(adId) {
    await db.delete(sponsoredAds).where(eq(sponsoredAds.id, adId));
  }
  async recordAdImpression(interaction) {
    const [newInteraction] = await db.insert(adInteractions).values(interaction).returning();
    await db.update(sponsoredAds).set({
      impressions: sql2`${sponsoredAds.impressions} + 1`,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(sponsoredAds.id, interaction.adId));
    return newInteraction;
  }
  async recordAdClick(interaction) {
    const [newInteraction] = await db.insert(adInteractions).values(interaction).returning();
    await db.update(sponsoredAds).set({
      clicks: sql2`${sponsoredAds.clicks} + 1`,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(sponsoredAds.id, interaction.adId));
    return newInteraction;
  }
  async getUserAdPreferences(userId) {
    const [prefs] = await db.select().from(userAdPreferences).where(eq(userAdPreferences.userId, userId));
    return prefs;
  }
  async updateUserAdPreferences(userId, preferences) {
    const [updatedPrefs] = await db.insert(userAdPreferences).values({ ...preferences, userId }).onConflictDoUpdate({
      target: userAdPreferences.userId,
      set: {
        ...preferences,
        updatedAt: /* @__PURE__ */ new Date()
      }
    }).returning();
    return updatedPrefs;
  }
  async getAdAnalytics(adId) {
    const [ad] = await db.select({
      impressions: sponsoredAds.impressions,
      clicks: sponsoredAds.clicks
    }).from(sponsoredAds).where(eq(sponsoredAds.id, adId));
    if (!ad) {
      return { impressions: 0, clicks: 0, ctr: 0 };
    }
    const ctr = (ad.impressions || 0) > 0 ? (ad.clicks || 0) / (ad.impressions || 0) * 100 : 0;
    return {
      impressions: ad.impressions || 0,
      clicks: ad.clicks || 0,
      ctr: Math.round(ctr * 100) / 100
      // Round to 2 decimal places
    };
  }
  // Social media integration operations
  async getSocialCredentials(userId) {
    return await db.select().from(socialCredentials).where(eq(socialCredentials.userId, userId)).orderBy(socialCredentials.platform);
  }
  async getSocialCredential(userId, platform) {
    const [credential] = await db.select().from(socialCredentials).where(and(
      eq(socialCredentials.userId, userId),
      eq(socialCredentials.platform, platform)
    ));
    return credential;
  }
  async createSocialCredential(credential) {
    const [newCredential] = await db.insert(socialCredentials).values(credential).returning();
    return newCredential;
  }
  async updateSocialCredential(id, updates) {
    const [updatedCredential] = await db.update(socialCredentials).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(socialCredentials.id, id)).returning();
    return updatedCredential;
  }
  async deleteSocialCredential(id) {
    await db.delete(socialCredentials).where(eq(socialCredentials.id, id));
  }
  // External posts operations
  async getExternalPosts(userId) {
    const postsData = await db.select({
      post: externalPosts,
      socialCredential: socialCredentials
    }).from(externalPosts).innerJoin(socialCredentials, eq(externalPosts.socialCredentialId, socialCredentials.id)).where(eq(socialCredentials.userId, userId)).orderBy(desc(externalPosts.platformCreatedAt)).limit(50);
    return postsData.map(({ post, socialCredential }) => ({
      ...post,
      socialCredential
    }));
  }
  async createExternalPost(post) {
    const [newPost] = await db.insert(externalPosts).values(post).returning();
    return newPost;
  }
  async createExternalPosts(posts2) {
    if (posts2.length === 0) return [];
    const newPosts = await db.insert(externalPosts).values(posts2).returning();
    return newPosts;
  }
  async deleteOldExternalPosts(platform, keepDays) {
    const cutoffDate = /* @__PURE__ */ new Date();
    cutoffDate.setDate(cutoffDate.getDate() - keepDays);
    await db.delete(externalPosts).where(and(
      eq(externalPosts.platform, platform),
      sql2`${externalPosts.platformCreatedAt} < ${cutoffDate}`
    ));
  }
  // Password reset token methods
  async createPasswordResetToken(userId, token, expiresAt) {
    const [resetToken] = await db.insert(passwordResetTokens).values({
      userId,
      token,
      expiresAt
    }).returning();
    return resetToken;
  }
  async getPasswordResetToken(token) {
    const [resetToken] = await db.select().from(passwordResetTokens).where(eq(passwordResetTokens.token, token));
    return resetToken;
  }
  async deletePasswordResetToken(token) {
    await db.delete(passwordResetTokens).where(eq(passwordResetTokens.token, token));
  }
};
var storage = new DatabaseStorage();

// server/replitAuth.ts
import * as client from "openid-client";
import { Strategy } from "openid-client/passport";
import passport from "passport";
import session from "express-session";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
if (!process.env.REPLIT_DOMAINS) {
  throw new Error("Environment variable REPLIT_DOMAINS not provided");
}
var getOidcConfig = memoize(
  async () => {
    try {
      return await client.discovery(
        new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
        process.env.REPL_ID
      );
    } catch (error) {
      console.error("Failed to discover OIDC config:", error);
      throw error;
    }
  },
  { maxAge: 3600 * 1e3 }
);
function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1e3;
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions"
  });
  return session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: sessionTtl
    }
  });
}
function updateUserSession(user, tokens) {
  user.claims = tokens.claims();
  user.access_token = tokens.access_token;
  user.refresh_token = tokens.refresh_token;
  user.expires_at = user.claims?.exp;
}
async function upsertUser(claims) {
  await storage.upsertUser({
    id: claims["sub"],
    email: claims["email"],
    firstName: claims["first_name"],
    lastName: claims["last_name"],
    profileImageUrl: claims["profile_image_url"]
  });
}
async function setupAuth(app2) {
  app2.set("trust proxy", 1);
  app2.use(getSession());
  app2.use(passport.initialize());
  app2.use(passport.session());
  let config;
  try {
    config = await getOidcConfig();
    console.log("Successfully configured OIDC");
  } catch (error) {
    console.error("Failed to setup OIDC config:", error);
    throw error;
  }
  const verify = async (tokens, verified) => {
    const user = {};
    updateUserSession(user, tokens);
    await upsertUser(tokens.claims());
    verified(null, user);
  };
  for (const domain of process.env.REPLIT_DOMAINS.split(",")) {
    try {
      const strategy = new Strategy(
        {
          name: `replitauth:${domain}`,
          config,
          scope: "openid email profile offline_access",
          callbackURL: `https://${domain}/api/callback`
        },
        verify
      );
      passport.use(strategy);
      console.log(`Configured auth strategy for domain: ${domain}`);
      console.log(`Available strategies after registration:`, Object.keys(passport._strategies || {}));
    } catch (error) {
      console.error(`Failed to configure auth strategy for domain ${domain}:`, error);
      throw error;
    }
  }
  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((user, cb) => cb(null, user));
  app2.get("/api/login", (req, res, next) => {
    console.log(`Login attempt - hostname: ${req.hostname}, looking for strategy: replitauth:${req.hostname}`);
    passport.authenticate(`replitauth:${req.hostname}`, {
      prompt: "login consent",
      scope: ["openid", "email", "profile", "offline_access"]
    })(req, res, next);
  });
  app2.get("/api/callback", (req, res, next) => {
    passport.authenticate(`replitauth:${req.hostname}`, {
      successReturnToOrRedirect: "/",
      failureRedirect: "/api/login"
    })(req, res, next);
  });
  app2.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect(
        client.buildEndSessionUrl(config, {
          client_id: process.env.REPL_ID,
          post_logout_redirect_uri: `${req.protocol}://${req.hostname}`
        }).href
      );
    });
  });
}
var isAuthenticated = async (req, res, next) => {
  const user = req.user;
  if (!req.isAuthenticated() || !user.expires_at) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const now = Math.floor(Date.now() / 1e3);
  if (now <= user.expires_at) {
    return next();
  }
  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const config = await getOidcConfig();
    const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
    updateUserSession(user, tokenResponse);
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};

// server/objectStorage.ts
import { Storage } from "@google-cloud/storage";
import { randomUUID as randomUUID2 } from "crypto";
var REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";
var objectStorageClient = new Storage({
  credentials: {
    audience: "replit",
    subject_token_type: "access_token",
    token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
    type: "external_account",
    credential_source: {
      url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
      format: {
        type: "json",
        subject_token_field_name: "access_token"
      }
    },
    universe_domain: "googleapis.com"
  },
  projectId: ""
});
var ObjectNotFoundError = class _ObjectNotFoundError extends Error {
  constructor() {
    super("Object not found");
    this.name = "ObjectNotFoundError";
    Object.setPrototypeOf(this, _ObjectNotFoundError.prototype);
  }
};
var ObjectStorageService = class {
  constructor() {
  }
  // Gets the public object search paths.
  getPublicObjectSearchPaths() {
    const pathsStr = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
    const paths = Array.from(
      new Set(
        pathsStr.split(",").map((path3) => path3.trim()).filter((path3) => path3.length > 0)
      )
    );
    if (paths.length === 0) {
      throw new Error(
        "PUBLIC_OBJECT_SEARCH_PATHS not set. Create a bucket in 'Object Storage' tool and set PUBLIC_OBJECT_SEARCH_PATHS env var (comma-separated paths)."
      );
    }
    return paths;
  }
  // Gets the private object directory.
  getPrivateObjectDir() {
    const dir = process.env.PRIVATE_OBJECT_DIR || "";
    if (!dir) {
      throw new Error(
        "PRIVATE_OBJECT_DIR not set. Create a bucket in 'Object Storage' tool and set PRIVATE_OBJECT_DIR env var."
      );
    }
    return dir;
  }
  // Search for a public object from the search paths.
  async searchPublicObject(filePath) {
    for (const searchPath of this.getPublicObjectSearchPaths()) {
      const fullPath = `${searchPath}/${filePath}`;
      const { bucketName, objectName } = parseObjectPath(fullPath);
      const bucket = objectStorageClient.bucket(bucketName);
      const file = bucket.file(objectName);
      const [exists] = await file.exists();
      if (exists) {
        return file;
      }
    }
    return null;
  }
  // Downloads an object to the response.
  async downloadObject(file, res, cacheTtlSec = 3600) {
    try {
      const [metadata] = await file.getMetadata();
      res.set({
        "Content-Type": metadata.contentType || "application/octet-stream",
        "Content-Length": metadata.size,
        "Cache-Control": `public, max-age=${cacheTtlSec}`
      });
      const stream = file.createReadStream();
      stream.on("error", (err) => {
        console.error("Stream error:", err);
        if (!res.headersSent) {
          res.status(500).json({ error: "Error streaming file" });
        }
      });
      stream.pipe(res);
    } catch (error) {
      console.error("Error downloading file:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading file" });
      }
    }
  }
  // Gets the upload URL for an object entity.
  async getObjectEntityUploadURL() {
    const privateObjectDir = this.getPrivateObjectDir();
    if (!privateObjectDir) {
      throw new Error(
        "PRIVATE_OBJECT_DIR not set. Create a bucket in 'Object Storage' tool and set PRIVATE_OBJECT_DIR env var."
      );
    }
    const objectId = randomUUID2();
    const fullPath = `${privateObjectDir}/uploads/${objectId}`;
    const { bucketName, objectName } = parseObjectPath(fullPath);
    return signObjectURL({
      bucketName,
      objectName,
      method: "PUT",
      ttlSec: 900
    });
  }
  // Gets the object entity file from the object path.
  async getObjectEntityFile(objectPath) {
    if (!objectPath.startsWith("/objects/")) {
      throw new ObjectNotFoundError();
    }
    const parts = objectPath.slice(1).split("/");
    if (parts.length < 2) {
      throw new ObjectNotFoundError();
    }
    const entityId = parts.slice(1).join("/");
    let entityDir = this.getPrivateObjectDir();
    if (!entityDir.endsWith("/")) {
      entityDir = `${entityDir}/`;
    }
    const objectEntityPath = `${entityDir}${entityId}`;
    const { bucketName, objectName } = parseObjectPath(objectEntityPath);
    const bucket = objectStorageClient.bucket(bucketName);
    const objectFile = bucket.file(objectName);
    const [exists] = await objectFile.exists();
    if (!exists) {
      throw new ObjectNotFoundError();
    }
    return objectFile;
  }
  normalizeObjectEntityPath(rawPath) {
    if (!rawPath.startsWith("https://storage.googleapis.com/")) {
      return rawPath;
    }
    const url = new URL(rawPath);
    const rawObjectPath = url.pathname;
    let objectEntityDir = this.getPrivateObjectDir();
    if (!objectEntityDir.endsWith("/")) {
      objectEntityDir = `${objectEntityDir}/`;
    }
    if (!rawObjectPath.startsWith(objectEntityDir)) {
      return rawObjectPath;
    }
    const entityId = rawObjectPath.slice(objectEntityDir.length);
    return `/objects/${entityId}`;
  }
};
function parseObjectPath(path3) {
  if (!path3.startsWith("/")) {
    path3 = `/${path3}`;
  }
  const pathParts = path3.split("/");
  if (pathParts.length < 3) {
    throw new Error("Invalid path: must contain at least a bucket name");
  }
  const bucketName = pathParts[1];
  const objectName = pathParts.slice(2).join("/");
  return {
    bucketName,
    objectName
  };
}
async function signObjectURL({
  bucketName,
  objectName,
  method,
  ttlSec
}) {
  const request = {
    bucket_name: bucketName,
    object_name: objectName,
    method,
    expires_at: new Date(Date.now() + ttlSec * 1e3).toISOString()
  };
  const response = await fetch(
    `${REPLIT_SIDECAR_ENDPOINT}/object-storage/signed-object-url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to sign object URL, errorcode: ${response.status}, make sure you're running on Replit`
    );
  }
  const { signed_url: signedURL } = await response.json();
  return signedURL;
}

// server/performanceMonitor.ts
import { performance } from "perf_hooks";
var PerformanceMonitor = class {
  metrics = {
    requestCounts: /* @__PURE__ */ new Map(),
    responseTime: /* @__PURE__ */ new Map(),
    errorCounts: /* @__PURE__ */ new Map(),
    dbQueryTimes: [],
    memoryUsage: [],
    activeConnections: 0,
    cacheHitRate: 0
  };
  startTime = Date.now();
  // Track API request performance
  trackRequest(endpoint, duration) {
    const currentCount = this.metrics.requestCounts.get(endpoint) || 0;
    this.metrics.requestCounts.set(endpoint, currentCount + 1);
    const responseTimes = this.metrics.responseTime.get(endpoint) || [];
    responseTimes.push(duration);
    if (responseTimes.length > 100) {
      responseTimes.shift();
    }
    this.metrics.responseTime.set(endpoint, responseTimes);
  }
  // Track database query performance
  trackDbQuery(duration) {
    this.metrics.dbQueryTimes.push(duration);
    if (this.metrics.dbQueryTimes.length > 1e3) {
      this.metrics.dbQueryTimes.shift();
    }
  }
  // Track errors
  trackError(endpoint) {
    const currentCount = this.metrics.errorCounts.get(endpoint) || 0;
    this.metrics.errorCounts.set(endpoint, currentCount + 1);
  }
  // Record memory usage
  recordMemoryUsage() {
    const memUsage = process.memoryUsage();
    this.metrics.memoryUsage.push({
      timestamp: Date.now(),
      heapUsed: memUsage.heapUsed,
      heapTotal: memUsage.heapTotal
    });
    if (this.metrics.memoryUsage.length > 100) {
      this.metrics.memoryUsage.shift();
    }
  }
  // Update cache hit rate
  updateCacheHitRate(hitRate) {
    this.metrics.cacheHitRate = hitRate;
  }
  // Get comprehensive performance report
  getPerformanceReport() {
    const now = Date.now();
    const uptimeMinutes = Math.floor((now - this.startTime) / (1e3 * 60));
    const avgResponseTimes = {};
    const responseTimeEntries = Array.from(this.metrics.responseTime.entries());
    for (const [endpoint, times] of responseTimeEntries) {
      const avg = times.reduce((sum, time) => sum + time, 0) / times.length;
      avgResponseTimes[endpoint] = Math.round(avg);
    }
    const dbStats = this.metrics.dbQueryTimes.length > 0 ? {
      avgQueryTime: Math.round(
        this.metrics.dbQueryTimes.reduce((sum, time) => sum + time, 0) / this.metrics.dbQueryTimes.length
      ),
      maxQueryTime: Math.max(...this.metrics.dbQueryTimes),
      totalQueries: this.metrics.dbQueryTimes.length
    } : { avgQueryTime: 0, maxQueryTime: 0, totalQueries: 0 };
    const memUsage = process.memoryUsage();
    const currentMemoryMB = Math.round(memUsage.heapUsed / 1024 / 1024);
    const requestRates = {};
    const requestCountEntries = Array.from(this.metrics.requestCounts.entries());
    for (const [endpoint, count2] of requestCountEntries) {
      requestRates[endpoint] = Math.round(count2 / uptimeMinutes * 100) / 100;
    }
    const reportData = {
      uptime: {
        minutes: uptimeMinutes,
        hours: Math.round(uptimeMinutes / 60 * 100) / 100
      },
      requests: {
        totalRequests: Array.from(this.metrics.requestCounts.values()).reduce((sum, count2) => sum + count2, 0),
        requestCounts: Object.fromEntries(this.metrics.requestCounts),
        requestRates,
        avgResponseTimes
      },
      database: dbStats,
      memory: {
        currentUsageMB: currentMemoryMB,
        heapTotalMB: Math.round(memUsage.heapTotal / 1024 / 1024),
        memoryTrend: this.metrics.memoryUsage.slice(-10).map((m) => Math.round(m.heapUsed / 1024 / 1024))
      },
      errors: Object.fromEntries(this.metrics.errorCounts),
      cache: {
        hitRate: this.metrics.cacheHitRate
      }
    };
    return {
      ...reportData,
      health: this.calculateHealthStatus(reportData)
    };
  }
  // Determine overall system health
  getHealthStatus() {
    const report = this.getPerformanceReport();
    return report.health;
  }
  // Calculate health status based on report data (to avoid circular dependency)
  calculateHealthStatus(reportData) {
    if (reportData.memory.currentUsageMB > 900) return "critical";
    if (reportData.database.avgQueryTime > 5e3) return "critical";
    if (reportData.memory.currentUsageMB > 500) return "warning";
    if (reportData.database.avgQueryTime > 1e3) return "warning";
    if (reportData.cache.hitRate < 0.7) return "warning";
    return "healthy";
  }
  // Reset metrics (useful for periodic reports)
  reset() {
    this.metrics.requestCounts.clear();
    this.metrics.responseTime.clear();
    this.metrics.errorCounts.clear();
    this.metrics.dbQueryTimes = [];
    this.metrics.memoryUsage = [];
    this.startTime = Date.now();
  }
};
var performanceMonitor = new PerformanceMonitor();
function performanceMiddleware() {
  return (req, res, next) => {
    const start = performance.now();
    res.on("finish", () => {
      const duration = performance.now() - start;
      const endpoint = `${req.method} ${req.route?.path || req.path}`;
      performanceMonitor.trackRequest(endpoint, duration);
      if (res.statusCode >= 400) {
        performanceMonitor.trackError(endpoint);
      }
    });
    next();
  };
}
setInterval(() => {
  performanceMonitor.recordMemoryUsage();
}, 30 * 1e3);
setInterval(() => {
  const report = performanceMonitor.getPerformanceReport();
  console.log("=== PERFORMANCE REPORT ===");
  console.log(`Health: ${report.health.toUpperCase()}`);
  console.log(`Memory: ${report.memory.currentUsageMB}MB (${report.memory.heapTotalMB}MB total)`);
  console.log(`DB Avg Query: ${report.database.avgQueryTime}ms`);
  console.log(`Cache Hit Rate: ${(report.cache.hitRate * 100).toFixed(1)}%`);
  console.log(`Total Requests: ${report.requests.totalRequests}`);
  if (Object.keys(report.errors).length > 0) {
    console.log(`Errors:`, report.errors);
  }
  console.log("========================");
}, 10 * 60 * 1e3);

// server/routes.ts
init_notificationService();

// server/maintenanceService.ts
init_db();
init_schema();
import { sql as sql3 } from "drizzle-orm";
import { and as and3 } from "drizzle-orm";
var MaintenanceService = class {
  metrics = {
    database: {
      totalUsers: 0,
      activeSessions: 0,
      totalPosts: 0,
      activePolls: 0,
      upcomingEvents: 0,
      storageUsage: 0,
      queryPerformance: 0
    },
    performance: {
      avgResponseTime: 0,
      errorRate: 0,
      memoryUsage: 0,
      cacheHitRate: 0
    },
    cleanup: {
      expiredSessions: 0,
      oldNotifications: 0,
      expiredStories: 0,
      completedPolls: 0,
      pastEvents: 0
    },
    lastMaintenance: {
      sessionCleanup: null,
      notificationCleanup: null,
      storyCleanup: null,
      databaseOptimization: null
    }
  };
  performanceLog = [];
  async getMetrics() {
    await this.updateDatabaseMetrics();
    await this.updatePerformanceMetrics();
    await this.updateCleanupMetrics();
    return this.metrics;
  }
  async updateDatabaseMetrics() {
    try {
      const userCount = await db.select({ count: sql3`count(*)` }).from(users);
      this.metrics.database.totalUsers = userCount[0]?.count || 0;
      const sessionCount = await db.select({ count: sql3`count(*)` }).from(sessions).where(sql3`expire > NOW()`);
      this.metrics.database.activeSessions = sessionCount[0]?.count || 0;
      const postCount = await db.select({ count: sql3`count(*)` }).from(posts);
      this.metrics.database.totalPosts = postCount[0]?.count || 0;
      const activePolls = await db.select({ count: sql3`count(*)` }).from(polls).where(sql3`expires_at > NOW()`);
      this.metrics.database.activePolls = activePolls[0]?.count || 0;
      const upcomingEvents = await db.select({ count: sql3`count(*)` }).from(events).where(sql3`date_time > NOW()`);
      this.metrics.database.upcomingEvents = upcomingEvents[0]?.count || 0;
      const recentQueries = this.performanceLog.slice(-100);
      this.metrics.database.queryPerformance = recentQueries.length > 0 ? recentQueries.reduce((sum, log2) => sum + log2.responseTime, 0) / recentQueries.length : 0;
    } catch (error) {
      console.error("Error updating database metrics:", error);
    }
  }
  async updatePerformanceMetrics() {
    const recentLogs = this.performanceLog.filter(
      (log2) => Date.now() - log2.timestamp.getTime() < 36e5
      // Last hour
    );
    if (recentLogs.length > 0) {
      this.metrics.performance.avgResponseTime = recentLogs.reduce((sum, log2) => sum + log2.responseTime, 0) / recentLogs.length;
      this.metrics.performance.errorRate = recentLogs.filter((log2) => !log2.success).length / recentLogs.length * 100;
    }
    const memUsage = process.memoryUsage();
    this.metrics.performance.memoryUsage = Math.round(memUsage.heapUsed / 1024 / 1024);
  }
  async updateCleanupMetrics() {
    try {
      const expiredSessions = await db.select({ count: sql3`count(*)` }).from(sessions).where(sql3`expire < NOW()`);
      this.metrics.cleanup.expiredSessions = expiredSessions[0]?.count || 0;
      const oldNotifications = await db.select({ count: sql3`count(*)` }).from(notifications).where(sql3`created_at < NOW() - INTERVAL '30 days'`);
      this.metrics.cleanup.oldNotifications = oldNotifications[0]?.count || 0;
      const expiredStories = await db.select({ count: sql3`count(*)` }).from(stories).where(sql3`created_at < NOW() - INTERVAL '24 hours'`);
      this.metrics.cleanup.expiredStories = expiredStories[0]?.count || 0;
      const completedPolls = await db.select({ count: sql3`count(*)` }).from(polls).where(sql3`expires_at < NOW()`);
      this.metrics.cleanup.completedPolls = completedPolls[0]?.count || 0;
      const pastEvents = await db.select({ count: sql3`count(*)` }).from(events).where(sql3`date_time < NOW()`);
      this.metrics.cleanup.pastEvents = pastEvents[0]?.count || 0;
    } catch (error) {
      console.error("Error updating cleanup metrics:", error);
    }
  }
  logRequest(endpoint, responseTime, success) {
    this.performanceLog.push({
      timestamp: /* @__PURE__ */ new Date(),
      endpoint,
      responseTime,
      success
    });
    if (this.performanceLog.length > 1e3) {
      this.performanceLog = this.performanceLog.slice(-1e3);
    }
  }
  async performDailyMaintenance() {
    console.log("Starting daily maintenance tasks...");
    try {
      await this.cleanExpiredSessions();
      await this.cleanExpiredStories();
      this.metrics.lastMaintenance.sessionCleanup = /* @__PURE__ */ new Date();
      this.metrics.lastMaintenance.storyCleanup = /* @__PURE__ */ new Date();
      console.log("Daily maintenance completed successfully");
    } catch (error) {
      console.error("Error during daily maintenance:", error);
    }
  }
  async performWeeklyMaintenance() {
    console.log("Starting weekly maintenance tasks...");
    try {
      await this.cleanOldNotifications();
      await this.archiveCompletedPolls();
      this.metrics.lastMaintenance.notificationCleanup = /* @__PURE__ */ new Date();
      this.metrics.lastMaintenance.databaseOptimization = /* @__PURE__ */ new Date();
      console.log("Weekly maintenance completed successfully");
    } catch (error) {
      console.error("Error during weekly maintenance:", error);
    }
  }
  async cleanExpiredSessions() {
    const result = await db.delete(sessions).where(sql3`expire < NOW()`);
    console.log(`Cleaned expired sessions: ${result.rowCount || 0}`);
  }
  async cleanExpiredStories() {
    const result = await db.delete(stories).where(sql3`created_at < NOW() - INTERVAL '24 hours'`);
    console.log(`Cleaned expired stories: ${result.rowCount || 0}`);
  }
  async cleanOldNotifications() {
    const result = await db.delete(notifications).where(and3(
      sql3`created_at < NOW() - INTERVAL '30 days'`,
      sql3`is_read = true`
    ));
    console.log(`Cleaned old notifications: ${result.rowCount || 0}`);
  }
  async archiveCompletedPolls() {
    const completedPolls = await db.select({ count: sql3`count(*)` }).from(polls).where(sql3`expires_at < NOW() - INTERVAL '7 days'`);
    console.log(`Found ${completedPolls[0]?.count || 0} polls ready for archiving`);
  }
  getHealthStatus() {
    const issues = [];
    let status = "healthy";
    if (this.metrics.database.queryPerformance > 1e3) {
      issues.push("Slow database queries detected");
      status = "warning";
    }
    if (this.metrics.performance.errorRate > 5) {
      issues.push("High error rate detected");
      status = "critical";
    }
    if (this.metrics.performance.avgResponseTime > 2e3) {
      issues.push("Slow response times detected");
      status = status === "critical" ? "critical" : "warning";
    }
    if (this.metrics.performance.memoryUsage > 500) {
      issues.push("High memory usage detected");
      status = status === "critical" ? "critical" : "warning";
    }
    if (this.metrics.cleanup.expiredSessions > 100) {
      issues.push("Many expired sessions need cleanup");
      status = status === "critical" ? "critical" : "warning";
    }
    if (this.metrics.cleanup.oldNotifications > 1e3) {
      issues.push("Many old notifications need cleanup");
      status = status === "critical" ? "critical" : "warning";
    }
    return { status, issues };
  }
};
var maintenanceService = new MaintenanceService();
var DAILY_MAINTENANCE_INTERVAL = 24 * 60 * 60 * 1e3;
var WEEKLY_MAINTENANCE_INTERVAL = 7 * 24 * 60 * 60 * 1e3;
setInterval(() => {
  const now = /* @__PURE__ */ new Date();
  if (now.getHours() === 2 && now.getMinutes() === 0) {
    maintenanceService.performDailyMaintenance();
  }
}, 6e4);
setInterval(() => {
  const now = /* @__PURE__ */ new Date();
  if (now.getDay() === 0 && now.getHours() === 3 && now.getMinutes() === 0) {
    maintenanceService.performWeeklyMaintenance();
  }
}, 6e4);

// server/emailService.ts
import { MailService } from "@sendgrid/mail";
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}
var mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);
async function sendChatbotConversation(conversation) {
  console.log("=== CHATBOT EMAIL DEBUG START ===");
  console.log("SendGrid API Key present:", !!process.env.SENDGRID_API_KEY);
  console.log("Conversation data received:", {
    userId: conversation.userId,
    userEmail: conversation.userEmail,
    messageCount: conversation.messageCount,
    conversationLength: conversation.conversationHistory?.length || 0
  });
  try {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
          MyKliq Chatbot Conversation
        </h2>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>User ID:</strong> ${conversation.userId}</p>
          <p><strong>User Email:</strong> ${conversation.userEmail || "Not available"}</p>
          <p><strong>Timestamp:</strong> ${new Date(conversation.timestamp).toLocaleString()}</p>
          <p><strong>Message Count:</strong> ${conversation.messageCount || "Unknown"}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5;">
            <h3 style="color: #4f46e5; margin: 0 0 15px 0;">Complete Conversation:</h3>
            <pre style="margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.5; background-color: #ffffff; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0;">${conversation.conversationHistory}</pre>
          </div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
        <p style="color: #64748b; font-size: 12px; text-align: center;">
          This email was automatically generated by the MyKliq Support Chatbot system.
        </p>
      </div>
    `;
    const textContent = `
MyKliq Chatbot Conversation

User ID: ${conversation.userId}
User Email: ${conversation.userEmail || "Not available"}
Timestamp: ${new Date(conversation.timestamp).toLocaleString()}
Message Count: ${conversation.messageCount || "Unknown"}

COMPLETE CONVERSATION:
${conversation.conversationHistory}

---
This email was automatically generated by the MyKliq Support Chatbot system.
    `;
    const emailData = {
      to: "futureshockholdings@gmail.com",
      from: "futureshockholdings@gmail.com",
      // Use your verified sender email
      subject: `[MyKliq Support] Chatbot Conversation - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`,
      text: textContent,
      html: htmlContent
    };
    console.log("Sending email with data:", {
      to: emailData.to,
      from: emailData.from,
      subject: emailData.subject,
      textLength: emailData.text.length,
      htmlLength: emailData.html.length
    });
    const result = await mailService.send(emailData);
    console.log("SendGrid response:", result);
    console.log("Chatbot conversation email sent successfully");
    console.log("=== CHATBOT EMAIL DEBUG END ===");
    return true;
  } catch (error) {
    console.error("=== CHATBOT EMAIL ERROR START ===");
    console.error("Failed to send chatbot conversation email:", error);
    console.error("Error details:", {
      message: error?.message,
      response: error?.response?.body || "No response body",
      statusCode: error?.code || error?.statusCode
    });
    console.error("=== CHATBOT EMAIL ERROR END ===");
    return false;
  }
}

// server/routes.ts
init_db();
init_schema();
import bcrypt from "bcrypt";

// server/cryptoService.ts
import crypto from "crypto";
var ALGORITHM = "aes-256-gcm";
var KEY_LENGTH = 32;
function getEncryptionKey() {
  const keySource = process.env.ENCRYPTION_KEY || process.env.SESSION_SECRET || "default-key-for-dev";
  return crypto.scryptSync(keySource, "salt", KEY_LENGTH);
}
function encryptText(plaintext) {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipherGCM(ALGORITHM, key, iv);
  cipher.setAAD(Buffer.from("oauth-token"));
  let encrypted = cipher.update(plaintext, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag();
  return {
    encryptedText: encrypted,
    iv: iv.toString("hex"),
    authTag: authTag.toString("hex")
  };
}
function decryptText(encryptedData) {
  const key = getEncryptionKey();
  const iv = Buffer.from(encryptedData.iv, "hex");
  const authTag = Buffer.from(encryptedData.authTag, "hex");
  const decipher = crypto.createDecipherGCM(ALGORITHM, key, iv);
  decipher.setAAD(Buffer.from("oauth-token"));
  decipher.setAuthTag(authTag);
  let decrypted = decipher.update(encryptedData.encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
function encryptForStorage(plaintext) {
  const encrypted = encryptText(plaintext);
  return JSON.stringify(encrypted);
}
function decryptFromStorage(encryptedString) {
  try {
    const encryptedData = JSON.parse(encryptedString);
    return decryptText(encryptedData);
  } catch (error) {
    console.error("Failed to decrypt data:", error);
    throw new Error("Invalid encrypted data");
  }
}

// server/platforms/twitch.ts
var TwitchOAuth = class {
  clientId;
  clientSecret;
  redirectUri;
  constructor() {
    this.clientId = process.env.TWITCH_CLIENT_ID || "demo-twitch-client-id";
    this.clientSecret = process.env.TWITCH_CLIENT_SECRET || "demo-twitch-secret";
    this.redirectUri = `${process.env.BASE_URL || "http://localhost:5000"}/api/oauth/callback/twitch`;
  }
  getAuthUrl(state) {
    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      response_type: "code",
      scope: "user:read:email channel:read:subscriptions",
      state
    });
    return `https://id.twitch.tv/oauth2/authorize?${params.toString()}`;
  }
  async exchangeCodeForTokens(code) {
    const response = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code,
        grant_type: "authorization_code",
        redirect_uri: this.redirectUri
      })
    });
    if (!response.ok) {
      throw new Error(`Twitch OAuth error: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      tokenType: data.token_type || "Bearer"
    };
  }
  async refreshTokens(refreshToken) {
    const response = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken
      })
    });
    if (!response.ok) {
      throw new Error(`Twitch token refresh error: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      tokenType: data.token_type || "Bearer"
    };
  }
  async getUserInfo(accessToken) {
    const response = await fetch("https://api.twitch.tv/helix/users", {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Client-Id": this.clientId
      }
    });
    if (!response.ok) {
      throw new Error(`Twitch API error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.data[0];
  }
  async fetchUserPosts(accessToken, userId) {
    try {
      if (!userId) {
        const userInfo = await this.getUserInfo(accessToken);
        userId = userInfo.id;
      }
      const response = await fetch(`https://api.twitch.tv/helix/videos?user_id=${userId}&first=10`, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Client-Id": this.clientId
        }
      });
      if (!response.ok) {
        throw new Error(`Twitch API error: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data.map((video) => ({
        id: video.id,
        platform: "twitch",
        content: video.title,
        mediaUrl: video.thumbnail_url?.replace("%{width}", "480").replace("%{height}", "270"),
        platformPostId: video.id,
        originalUrl: video.url,
        createdAt: new Date(video.created_at),
        metadata: {
          type: video.type,
          duration: video.duration,
          viewCount: video.view_count,
          language: video.language
        }
      }));
    } catch (error) {
      console.error("Error fetching Twitch posts:", error);
      return [];
    }
  }
  async revokeTokens(accessToken) {
    await fetch(`https://id.twitch.tv/oauth2/revoke?client_id=${this.clientId}&token=${accessToken}`, {
      method: "POST"
    });
  }
};

// server/platforms/discord.ts
var DiscordOAuth = class {
  clientId;
  clientSecret;
  redirectUri;
  constructor() {
    this.clientId = process.env.DISCORD_CLIENT_ID || "demo-discord-client-id";
    this.clientSecret = process.env.DISCORD_CLIENT_SECRET || "demo-discord-secret";
    this.redirectUri = `${process.env.BASE_URL || "http://localhost:5000"}/api/oauth/callback/discord`;
  }
  getAuthUrl(state) {
    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      response_type: "code",
      scope: "identify email guilds guilds.members.read",
      state
    });
    return `https://discord.com/api/oauth2/authorize?${params.toString()}`;
  }
  async exchangeCodeForTokens(code) {
    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code,
        grant_type: "authorization_code",
        redirect_uri: this.redirectUri
      })
    });
    if (!response.ok) {
      throw new Error(`Discord OAuth error: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      tokenType: data.token_type || "Bearer"
    };
  }
  async refreshTokens(refreshToken) {
    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken
      })
    });
    if (!response.ok) {
      throw new Error(`Discord token refresh error: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
      tokenType: data.token_type || "Bearer"
    };
  }
  async getUserInfo(accessToken) {
    const response = await fetch("https://discord.com/api/users/@me", {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    });
    if (!response.ok) {
      throw new Error(`Discord API error: ${response.statusText}`);
    }
    return await response.json();
  }
  async fetchUserPosts(accessToken, userId) {
    try {
      const guildsResponse = await fetch("https://discord.com/api/users/@me/guilds", {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      });
      if (!guildsResponse.ok) {
        throw new Error(`Discord API error: ${guildsResponse.statusText}`);
      }
      const guilds = await guildsResponse.json();
      const posts2 = [];
      if (guilds.length > 0) {
        posts2.push({
          id: `discord-activity-${Date.now()}`,
          platform: "discord",
          content: `Active in ${guilds.length} Discord servers including: ${guilds.slice(0, 3).map((g) => g.name).join(", ")}${guilds.length > 3 ? "..." : ""}`,
          mediaUrl: void 0,
          platformPostId: `activity-${Date.now()}`,
          originalUrl: "https://discord.com/channels/@me",
          createdAt: /* @__PURE__ */ new Date(),
          metadata: {
            type: "activity_summary",
            guildCount: guilds.length,
            topGuilds: guilds.slice(0, 5).map((g) => ({
              id: g.id,
              name: g.name,
              icon: g.icon
            }))
          }
        });
      }
      return posts2;
    } catch (error) {
      console.error("Error fetching Discord posts:", error);
      return [];
    }
  }
  async revokeTokens(accessToken) {
    await fetch("https://discord.com/api/oauth2/token/revoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        token: accessToken
      })
    });
  }
};

// server/oauthService.ts
var OAuthService = class {
  platforms = /* @__PURE__ */ new Map();
  constructor() {
    this.platforms.set("twitch", new TwitchOAuth());
    this.platforms.set("discord", new DiscordOAuth());
  }
  getSupportedPlatforms() {
    return Array.from(this.platforms.keys());
  }
  getPlatform(platform) {
    return this.platforms.get(platform);
  }
  generateAuthUrl(platform, userId) {
    const platformImpl = this.platforms.get(platform);
    if (!platformImpl) {
      return null;
    }
    const state = Buffer.from(JSON.stringify({ userId, platform })).toString("base64");
    return platformImpl.getAuthUrl(state);
  }
  async handleOAuthCallback(platform, code, state) {
    try {
      const platformImpl = this.platforms.get(platform);
      if (!platformImpl) {
        return { success: false, error: "Unsupported platform" };
      }
      const stateData = JSON.parse(Buffer.from(state, "base64").toString());
      const { userId } = stateData;
      const tokens = await platformImpl.exchangeCodeForTokens(code);
      const userInfo = await platformImpl.getUserInfo(tokens.accessToken);
      const encryptedAccessToken = encryptForStorage(tokens.accessToken);
      const encryptedRefreshToken = tokens.refreshToken ? encryptForStorage(tokens.refreshToken) : null;
      const credential = {
        userId,
        platform,
        platformUserId: userInfo.id || userInfo.login || userInfo.username,
        platformUsername: userInfo.username || userInfo.login || userInfo.display_name,
        encryptedAccessToken,
        encryptedRefreshToken,
        tokenExpiresAt: tokens.expiresIn ? new Date(Date.now() + tokens.expiresIn * 1e3) : null,
        tokenType: tokens.tokenType || "Bearer",
        scopes: [],
        // Will be filled based on platform requirements
        isActive: true
      };
      await storage.createSocialCredential(credential);
      return { success: true, userId };
    } catch (error) {
      console.error("OAuth callback error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }
  async fetchUserPosts(userId, platform) {
    try {
      const credentials = await storage.getSocialCredentials(userId);
      const activeCreds = credentials.filter(
        (cred) => cred.isActive && (!platform || cred.platform === platform)
      );
      const allPosts = [];
      for (const cred of activeCreds) {
        const platformImpl = this.platforms.get(cred.platform);
        if (!platformImpl) continue;
        try {
          const accessToken = decryptFromStorage(cred.encryptedAccessToken);
          if (cred.tokenExpiresAt && cred.tokenExpiresAt < /* @__PURE__ */ new Date() && cred.encryptedRefreshToken) {
            const refreshToken = decryptFromStorage(cred.encryptedRefreshToken);
            const newTokens = await platformImpl.refreshTokens(refreshToken);
            const updatedCred = {
              ...cred,
              encryptedAccessToken: encryptForStorage(newTokens.accessToken),
              encryptedRefreshToken: newTokens.refreshToken ? encryptForStorage(newTokens.refreshToken) : cred.encryptedRefreshToken,
              tokenExpiresAt: newTokens.expiresIn ? new Date(Date.now() + newTokens.expiresIn * 1e3) : null
            };
            await storage.updateSocialCredential(cred.id, updatedCred);
            const posts2 = await platformImpl.fetchUserPosts(newTokens.accessToken, cred.platformUserId);
            allPosts.push(...posts2);
          } else {
            const posts2 = await platformImpl.fetchUserPosts(accessToken, cred.platformUserId);
            allPosts.push(...posts2);
          }
        } catch (error) {
          console.error(`Error fetching posts from ${cred.platform}:`, error);
          if (error instanceof Error && error.message.includes("401")) {
            await storage.updateSocialCredential(cred.id, { ...cred, isActive: false });
          }
        }
      }
      return allPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } catch (error) {
      console.error("Error fetching user posts:", error);
      return [];
    }
  }
  async disconnectPlatform(userId, platform) {
    try {
      const credentials = await storage.getSocialCredentials(userId);
      const platformCred = credentials.find((cred) => cred.platform === platform && cred.isActive);
      if (!platformCred) {
        return false;
      }
      const platformImpl = this.platforms.get(platform);
      if (platformImpl) {
        try {
          const accessToken = decryptFromStorage(platformCred.encryptedAccessToken);
          await platformImpl.revokeTokens(accessToken);
        } catch (error) {
          console.error("Error revoking tokens:", error);
        }
      }
      await storage.updateSocialCredential(platformCred.id, {
        ...platformCred,
        isActive: false
      });
      return true;
    } catch (error) {
      console.error("Error disconnecting platform:", error);
      return false;
    }
  }
  async getUserConnections(userId) {
    try {
      const credentials = await storage.getSocialCredentials(userId);
      return credentials.map((cred) => ({
        platform: cred.platform,
        username: cred.platformUsername,
        isActive: cred.isActive,
        connectedAt: cred.createdAt
      }));
    } catch (error) {
      console.error("Error getting user connections:", error);
      return [];
    }
  }
};
var oauthService = new OAuthService();

// server/routes.ts
import { z as z2 } from "zod";
import { WebSocketServer, WebSocket } from "ws";
import crypto2 from "crypto";
var passwordSetupSchema = z2.object({
  password: z2.string().min(10, "Password must be at least 10 characters long").regex(/[a-zA-Z]/, "Password must contain at least one letter").regex(/[0-9]/, "Password must contain at least one number").regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
});
function getZodiacSign(birthdate) {
  const date2 = new Date(birthdate);
  const month = date2.getMonth() + 1;
  const day = date2.getDate();
  if (month === 3 && day >= 21 || month === 4 && day <= 19) return "Aries";
  if (month === 4 && day >= 20 || month === 5 && day <= 20) return "Taurus";
  if (month === 5 && day >= 21 || month === 6 && day <= 20) return "Gemini";
  if (month === 6 && day >= 21 || month === 7 && day <= 22) return "Cancer";
  if (month === 7 && day >= 23 || month === 8 && day <= 22) return "Leo";
  if (month === 8 && day >= 23 || month === 9 && day <= 22) return "Virgo";
  if (month === 9 && day >= 23 || month === 10 && day <= 22) return "Libra";
  if (month === 10 && day >= 23 || month === 11 && day <= 21) return "Scorpio";
  if (month === 11 && day >= 22 || month === 12 && day <= 21) return "Sagittarius";
  if (month === 12 && day >= 22 || month === 1 && day <= 19) return "Capricorn";
  if (month === 1 && day >= 20 || month === 2 && day <= 18) return "Aquarius";
  return "Pisces";
}
function generateDailyBibleVerse() {
  const bibleVerses = [
    {
      verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
      reference: "Jeremiah 29:11",
      reflection: "Today, trust in God's perfect plan for your life. Even when circumstances seem uncertain, remember that His plans are always for your good."
    },
    {
      verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
      reference: "Joshua 1:9",
      reflection: "Face today's challenges with confidence, knowing that God's presence goes before you and His strength empowers you."
    },
    {
      verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      reference: "Proverbs 3:5-6",
      reflection: "Release control and trust God's wisdom over your own. He sees the bigger picture and will guide your steps."
    },
    {
      verse: "I can do all this through him who gives me strength.",
      reference: "Philippians 4:13",
      reflection: "Whatever obstacles you face today, remember that Christ's strength is available to help you overcome every challenge."
    },
    {
      verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      reference: "Romans 8:28",
      reflection: "Even in difficult moments, trust that God is weaving all things together for your ultimate good and His glory."
    },
    {
      verse: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
      reference: "Zephaniah 3:17",
      reflection: "Remember today that you are deeply loved and cherished by God. He delights in you and celebrates your life."
    },
    {
      verse: "Cast all your anxiety on him because he cares for you.",
      reference: "1 Peter 5:7",
      reflection: "Don't carry today's worries alone. Give them to God, knowing He cares deeply about every concern in your heart."
    },
    {
      verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      reference: "Isaiah 40:31",
      reflection: "When you feel tired or discouraged, look to the Lord for renewed strength and energy to continue your journey."
    },
    {
      verse: "The Lord is my shepherd, I lack nothing.",
      reference: "Psalm 23:1",
      reflection: "Rest in the assurance that God provides for all your needs. He is your caring shepherd who watches over you."
    },
    {
      verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      reference: "Philippians 4:6",
      reflection: "Replace anxiety with prayer today. Bring every concern to God with a grateful heart, trusting in His care."
    },
    {
      verse: "He has made everything beautiful in its time.",
      reference: "Ecclesiastes 3:11",
      reflection: "Trust God's timing in your life. What seems delayed or difficult now is being worked into something beautiful."
    },
    {
      verse: "The Lord will fight for you; you need only to be still.",
      reference: "Exodus 14:14",
      reflection: "In today's battles, remember that God fights alongside you. Sometimes the most powerful thing you can do is rest in His strength."
    },
    {
      verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
      reference: "Matthew 6:33",
      reflection: "Prioritize your relationship with God today, and trust Him to take care of everything else you need."
    },
    {
      verse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
      reference: "1 Corinthians 13:4",
      reflection: "Let love guide your interactions today. Show patience and kindness to everyone you encounter."
    },
    {
      verse: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights.",
      reference: "James 1:17",
      reflection: "Notice and give thanks for the good gifts in your life today. Every blessing comes from God's loving hand."
    }
  ];
  const today = /* @__PURE__ */ new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 864e5);
  const verseIndex = dayOfYear % bibleVerses.length;
  return bibleVerses[verseIndex];
}
function generateDailyHoroscope(sign) {
  const horoscopes = {
    Aries: [
      "Today brings exciting opportunities for new beginnings. Your natural leadership will shine through in unexpected ways.",
      "Energy and enthusiasm guide your day. Take calculated risks and trust your instincts in important decisions.",
      "A spontaneous adventure awaits. Your courage will help you overcome any obstacles that come your way."
    ],
    Taurus: [
      "Stability and comfort are your themes today. Focus on building lasting foundations for your future goals.",
      "Your practical nature serves you well in financial matters. Trust your steady approach to problem-solving.",
      "Patience pays off as a long-term project finally shows promising results. Enjoy the fruits of your labor."
    ],
    Gemini: [
      "Communication is key today. Your wit and charm open doors to new social and professional connections.",
      "Curiosity leads to fascinating discoveries. Embrace variety and don't be afraid to multitask.",
      "Mental agility helps you adapt to changing circumstances. Your flexible nature is your greatest asset today."
    ],
    Cancer: [
      "Emotions run deep today, bringing clarity to personal relationships. Trust your intuitive guidance.",
      "Home and family take center stage. Your nurturing nature brings comfort to those who need it most.",
      "Memories from the past provide valuable insights for current situations. Honor your emotional wisdom."
    ],
    Leo: [
      "The spotlight finds you naturally today. Your confidence and creativity inspire others to follow your lead.",
      "Generous gestures bring unexpected rewards. Your warm heart attracts positive energy and new friendships.",
      "Express yourself boldly and without fear. Your unique talents deserve recognition and appreciation."
    ],
    Virgo: [
      "Attention to detail pays dividends today. Your methodical approach solves problems others couldn't crack.",
      "Organization brings peace to chaotic situations. Your helpful nature makes you indispensable to your team.",
      "Health and wellness deserve extra attention. Small improvements in your routine yield significant benefits."
    ],
    Libra: [
      "Balance and harmony guide your decisions today. Your diplomatic skills help resolve ongoing conflicts.",
      "Beauty and aesthetics inspire creative projects. Trust your excellent taste in all artistic endeavors.",
      "Partnerships flourish under your fair and considerate approach. Collaboration brings mutual success."
    ],
    Scorpio: [
      "Deep transformation occurs beneath the surface. Trust the process of renewal happening in your life.",
      "Intensity and passion drive your pursuits today. Your determination overcomes seemingly impossible obstacles.",
      "Hidden truths come to light, providing clarity about mysterious situations. Trust your investigative instincts."
    ],
    Sagittarius: [
      "Adventure calls your name today. Your optimistic outlook opens doors to exciting new experiences.",
      "Philosophical discussions expand your worldview. Share your wisdom and learn from diverse perspectives.",
      "Freedom and independence fuel your happiness. Trust your wanderlust to guide you toward growth."
    ],
    Capricorn: [
      "Hard work and discipline lead to tangible achievements. Your ambitious nature brings long-awaited recognition.",
      "Traditional approaches prove most effective today. Your respect for structure helps you reach important goals.",
      "Authority figures notice your reliable nature. Professional advancement opportunities may present themselves."
    ],
    Aquarius: [
      "Innovation and originality set you apart today. Your unique perspective offers solutions others missed.",
      "Humanitarian causes capture your attention. Your progressive ideals inspire positive change in your community.",
      "Technology and the future fascinate you. Embrace new methods that streamline your daily routines."
    ],
    Pisces: [
      "Intuition and creativity flow freely today. Your artistic sensibilities bring beauty to ordinary situations.",
      "Compassion guides your interactions with others. Your empathetic nature heals emotional wounds.",
      "Dreams and imagination provide valuable insights. Pay attention to subtle messages from your subconscious."
    ]
  };
  const colors = ["Purple", "Gold", "Silver", "Blue", "Green", "Red", "Orange", "Pink", "Turquoise", "Coral"];
  const readings = horoscopes[sign] || horoscopes.Aries;
  const today = /* @__PURE__ */ new Date();
  const seedValue = today.getDate() + today.getMonth() + sign.length;
  return {
    reading: readings[seedValue % readings.length],
    luckyNumber: seedValue * 7 % 42 + 1,
    luckyColor: colors[seedValue % colors.length]
  };
}
async function registerRoutes(app2) {
  app2.use(performanceMiddleware());
  await setupAuth(app2);
  app2.post("/api/auth/signup", async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        bio,
        kliqName,
        birthdate,
        interests,
        favoriteLocations,
        favoriteFoods,
        musicGenres,
        hobbies,
        favoriteMovies,
        favoriteBooks,
        relationshipStatus,
        petPreferences,
        lifestyle,
        inviteCode: receivedInviteCode
      } = req.body;
      if (!firstName || !lastName || !email || !phoneNumber) {
        return res.status(400).json({
          message: "Missing required fields: firstName, lastName, email, phoneNumber"
        });
      }
      const existingUserByEmail = await storage.getUserByEmail(email);
      if (existingUserByEmail) {
        return res.status(400).json({ message: "User already exists with this email" });
      }
      const userId = crypto2.randomUUID();
      const inviteCode = await storage.generateInviteCode();
      const newUser = await storage.upsertUser({
        id: userId,
        email: email.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phoneNumber: phoneNumber.trim(),
        bio: bio?.trim() || null,
        inviteCode,
        kliqName: kliqName?.trim() || "My Kliq",
        birthdate: birthdate || null,
        interests: interests?.filter((item) => item.trim()) || [],
        favoriteLocations: favoriteLocations?.filter((item) => item.trim()) || [],
        favoriteFoods: favoriteFoods?.filter((item) => item.trim()) || [],
        musicGenres: musicGenres?.filter((item) => item.trim()) || [],
        hobbies: hobbies?.filter((item) => item.trim()) || [],
        favoriteMovies: favoriteMovies?.filter((item) => item.trim()) || [],
        favoriteBooks: favoriteBooks?.filter((item) => item.trim()) || [],
        relationshipStatus: relationshipStatus || null,
        petPreferences: petPreferences || null,
        lifestyle: lifestyle || null
      });
      const userSession = {
        claims: {
          sub: userId,
          email,
          first_name: firstName,
          last_name: lastName,
          profile_image_url: null
        },
        expires_at: Math.floor(Date.now() / 1e3) + 7 * 24 * 60 * 60
        // 7 days from now
      };
      req.login(userSession, async (err) => {
        if (err) {
          console.error("Session creation error:", err);
          return res.status(500).json({ message: "Failed to create session" });
        }
        if (receivedInviteCode && receivedInviteCode.trim()) {
          try {
            const inviteCodeOwner = await storage.getUserByInviteCode(receivedInviteCode.trim());
            if (inviteCodeOwner) {
              await storage.addFriend({
                userId,
                friendId: inviteCodeOwner.id,
                status: "accepted",
                rank: 1
              });
              await storage.addFriend({
                userId: inviteCodeOwner.id,
                friendId: userId,
                status: "accepted",
                rank: 1
              });
              await storage.markInviteCodeAsUsed(receivedInviteCode.trim(), userId, inviteCodeOwner.id);
              console.log(`User ${userId} joined ${inviteCodeOwner.id}'s kliq via invite code ${receivedInviteCode}`);
            }
          } catch (error) {
            console.error("Error creating kliq membership:", error);
          }
        }
        res.json({
          message: "Profile created successfully",
          user: newUser
        });
      });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({
        message: error.message || "Failed to create profile"
      });
    }
  });
  app2.get("/api/auth/user", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  app2.post("/api/auth/setup-password", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const validation = passwordSetupSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          message: "Invalid password format",
          errors: validation.error.errors
        });
      }
      const { password } = validation.data;
      const hashedPassword = await bcrypt.hash(password, 12);
      await storage.updateUserPassword(userId, hashedPassword);
      res.json({
        message: "Password set up successfully",
        success: true
      });
    } catch (error) {
      console.error("Error setting up password:", error);
      res.status(500).json({
        message: "Failed to set up password. Please try again."
      });
    }
  });
  app2.post("/api/auth/login", async (req, res) => {
    try {
      const { phoneNumber, password } = req.body;
      if (!phoneNumber || !password) {
        return res.status(400).json({
          message: "Phone number and password are required"
        });
      }
      const user = await storage.getUserByPhone(phoneNumber);
      if (!user) {
        return res.status(401).json({
          message: "Invalid phone number or password"
        });
      }
      if (!user.password) {
        return res.status(401).json({
          message: "No password set for this account. Please set up your password first."
        });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          message: "Invalid phone number or password"
        });
      }
      const userSession = {
        claims: {
          sub: user.id,
          email: user.email,
          first_name: user.firstName,
          last_name: user.lastName,
          profile_image_url: user.profileImageUrl
        },
        access_token: "custom-password-login",
        refresh_token: null,
        expires_at: Math.floor(Date.now() / 1e3) + 7 * 24 * 60 * 60
        // 7 days
      };
      req.login(userSession, (err) => {
        if (err) {
          console.error("Session login error:", err);
          return res.status(500).json({
            message: "Failed to create session"
          });
        }
        console.log("Login successful for user:", user.id);
        res.setHeader("Content-Type", "application/json");
        res.json({
          message: "Login successful",
          success: true,
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            profileImageUrl: user.profileImageUrl
          }
        });
      });
    } catch (error) {
      console.error("Login error:", error);
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({
        message: "Login failed. Please try again."
      });
    }
  });
  app2.post("/api/auth/verify-name", async (req, res) => {
    try {
      const { firstName, lastName } = req.body;
      if (!firstName || !lastName) {
        return res.status(400).json({ message: "First name and last name are required" });
      }
      const user = await storage.getUserByName(firstName.trim(), lastName.trim());
      if (!user) {
        return res.status(404).json({ message: "No account found with this name" });
      }
      res.json({
        success: true,
        message: "Name verified successfully"
      });
    } catch (error) {
      console.error("Error verifying name:", error);
      res.status(500).json({ message: "Failed to verify name" });
    }
  });
  app2.post("/api/auth/forgot-password", async (req, res) => {
    try {
      const { firstName, lastName, phoneNumber } = req.body;
      if (!firstName || !lastName || !phoneNumber) {
        return res.status(400).json({ message: "First name, last name, and phone number are required" });
      }
      const user = await storage.getUserByNameAndPhone(firstName.trim(), lastName.trim(), phoneNumber);
      if (!user) {
        return res.status(404).json({ message: "Account information does not match our records" });
      }
      if (!user.securityAnswer1 || !user.securityAnswer2 || !user.securityAnswer3) {
        return res.status(400).json({ message: "Security questions not set up for this account" });
      }
      const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const expiresAt = new Date(Date.now() + 60 * 60 * 1e3);
      await storage.createPasswordResetToken(user.id, resetToken, expiresAt);
      res.json({
        success: true,
        resetToken,
        // Send token for frontend flow
        message: "Phone number verified successfully"
      });
    } catch (error) {
      console.error("Error verifying phone number:", error);
      res.status(500).json({ message: "Failed to verify phone number" });
    }
  });
  app2.post("/api/auth/verify-security", async (req, res) => {
    try {
      const { resetToken, securityAnswer1, securityAnswer2, securityAnswer3 } = req.body;
      if (!resetToken || !securityAnswer1 || !securityAnswer2 || !securityAnswer3) {
        return res.status(400).json({ message: "All security answers are required" });
      }
      const tokenData = await storage.getPasswordResetToken(resetToken);
      if (!tokenData || tokenData.expiresAt < /* @__PURE__ */ new Date()) {
        return res.status(400).json({ message: "Invalid or expired reset token" });
      }
      const user = await storage.getUser(tokenData.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const answer1Valid = await bcrypt.compare(securityAnswer1.toLowerCase().trim(), user.securityAnswer1);
      const answer2Valid = await bcrypt.compare(securityAnswer2.toLowerCase().trim(), user.securityAnswer2);
      const answer3Valid = await bcrypt.compare(securityAnswer3.toLowerCase().trim(), user.securityAnswer3);
      if (!answer1Valid || !answer2Valid || !answer3Valid) {
        return res.status(400).json({ message: "Security answers do not match" });
      }
      res.json({ success: true, message: "Security questions verified" });
    } catch (error) {
      console.error("Error verifying security questions:", error);
      res.status(500).json({ message: "Failed to verify security questions" });
    }
  });
  app2.post("/api/auth/verify-pin", async (req, res) => {
    try {
      const { resetToken, pin } = req.body;
      if (!resetToken || !pin) {
        return res.status(400).json({ message: "Reset token and PIN are required" });
      }
      if (!/^\d{4}$/.test(pin)) {
        return res.status(400).json({ message: "PIN must be exactly 4 digits" });
      }
      const tokenData = await storage.getPasswordResetToken(resetToken);
      if (!tokenData || tokenData.expiresAt < /* @__PURE__ */ new Date()) {
        return res.status(400).json({ message: "Invalid or expired reset token" });
      }
      const user = await storage.getUser(tokenData.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (!user.securityPin) {
        return res.status(400).json({ message: "Security PIN not set up for this account" });
      }
      const pinValid = await bcrypt.compare(pin, user.securityPin);
      if (!pinValid) {
        return res.status(400).json({ message: "Invalid PIN" });
      }
      res.json({ success: true, message: "PIN verified successfully" });
    } catch (error) {
      console.error("Error verifying PIN:", error);
      res.status(500).json({ message: "Failed to verify PIN" });
    }
  });
  app2.post("/api/auth/reset-password", async (req, res) => {
    try {
      const { resetToken, newPassword } = req.body;
      if (!resetToken || !newPassword) {
        return res.status(400).json({ message: "Reset token and new password are required" });
      }
      const tokenData = await storage.getPasswordResetToken(resetToken);
      if (!tokenData || tokenData.expiresAt < /* @__PURE__ */ new Date()) {
        return res.status(400).json({ message: "Invalid or expired reset token" });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      await storage.updateUser(tokenData.userId, { password: hashedPassword });
      await storage.deletePasswordResetToken(resetToken);
      res.json({ success: true, message: "Password reset successfully" });
    } catch (error) {
      console.error("Error resetting password:", error);
      res.status(500).json({ message: "Failed to reset password" });
    }
  });
  app2.get("/api/user/profile/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const publicProfile = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        backgroundImageUrl: user.backgroundImageUrl,
        bio: user.bio,
        kliqName: user.kliqName,
        birthdate: user.birthdate,
        profileMusicUrl: user.profileMusicUrl,
        profileMusicTitle: user.profileMusicTitle,
        createdAt: user.createdAt
      };
      res.json(publicProfile);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ message: "Failed to fetch user profile" });
    }
  });
  app2.put("/api/user/profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const profileData = req.body;
      const cleanedData = {};
      if (profileData.bio !== void 0) cleanedData.bio = profileData.bio;
      if (profileData.phoneNumber !== void 0) cleanedData.phoneNumber = profileData.phoneNumber;
      if (profileData.kliqName !== void 0) cleanedData.kliqName = profileData.kliqName;
      if (profileData.kliqLeftEmoji !== void 0) cleanedData.kliqLeftEmoji = profileData.kliqLeftEmoji;
      if (profileData.kliqRightEmoji !== void 0) cleanedData.kliqRightEmoji = profileData.kliqRightEmoji;
      if (profileData.birthdate !== void 0) cleanedData.birthdate = profileData.birthdate;
      if (profileData.securityAnswer1) {
        cleanedData.securityAnswer1 = await bcrypt.hash(profileData.securityAnswer1.toLowerCase().trim(), 12);
      }
      if (profileData.securityAnswer2) {
        cleanedData.securityAnswer2 = await bcrypt.hash(profileData.securityAnswer2.toLowerCase().trim(), 12);
      }
      if (profileData.securityAnswer3) {
        cleanedData.securityAnswer3 = await bcrypt.hash(profileData.securityAnswer3.toLowerCase().trim(), 12);
      }
      if (profileData.securityPin) {
        cleanedData.securityPin = await bcrypt.hash(profileData.securityPin.trim(), 12);
      }
      if (profileData.interests) cleanedData.interests = profileData.interests.filter((item) => item.trim());
      if (profileData.favoriteLocations) cleanedData.favoriteLocations = profileData.favoriteLocations.filter((item) => item.trim());
      if (profileData.favoriteFoods) cleanedData.favoriteFoods = profileData.favoriteFoods.filter((item) => item.trim());
      if (profileData.musicGenres) cleanedData.musicGenres = profileData.musicGenres.filter((item) => item.trim());
      if (profileData.hobbies) cleanedData.hobbies = profileData.hobbies.filter((item) => item.trim());
      if (profileData.favoriteMovies) cleanedData.favoriteMovies = profileData.favoriteMovies.filter((item) => item.trim());
      if (profileData.favoriteBooks) cleanedData.favoriteBooks = profileData.favoriteBooks.filter((item) => item.trim());
      if (profileData.relationshipStatus !== void 0) cleanedData.relationshipStatus = profileData.relationshipStatus;
      if (profileData.petPreferences !== void 0) cleanedData.petPreferences = profileData.petPreferences;
      if (profileData.lifestyle !== void 0) cleanedData.lifestyle = profileData.lifestyle;
      await storage.updateUser(userId, cleanedData);
      const updatedUser = await storage.getUser(userId);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: "Failed to update profile" });
    }
  });
  app2.put("/api/user/profile-music", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { musicUrl, musicTitle } = req.body;
      if (!musicUrl || !musicTitle) {
        return res.status(400).json({ message: "Music URL and title are required" });
      }
      let finalMusicUrl = musicUrl;
      if (musicUrl.includes("storage.googleapis.com") || musicUrl.startsWith("/objects/")) {
        try {
          const objectStorageService = new ObjectStorageService();
          finalMusicUrl = objectStorageService.normalizeObjectEntityPath(musicUrl);
        } catch (error) {
          console.log("Error normalizing object path, using original URL:", error);
          finalMusicUrl = musicUrl;
        }
      } else {
        finalMusicUrl = musicUrl;
      }
      await storage.updateUser(userId, {
        profileMusicUrl: finalMusicUrl,
        profileMusicTitle: musicTitle
      });
      const updatedUser = await storage.getUser(userId);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating profile music:", error);
      res.status(500).json({ message: "Failed to update profile music" });
    }
  });
  app2.delete("/api/user/profile-music", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      await storage.updateUser(userId, {
        profileMusicUrl: null,
        profileMusicTitle: null
      });
      const updatedUser = await storage.getUser(userId);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error removing profile music:", error);
      res.status(500).json({ message: "Failed to remove profile music" });
    }
  });
  app2.patch("/api/user/background", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { backgroundImageUrl } = req.body;
      const objectStorageService = new ObjectStorageService();
      const normalizedPath = objectStorageService.normalizeObjectEntityPath(
        backgroundImageUrl
      );
      await storage.updateUser(userId, {
        backgroundImageUrl: normalizedPath
      });
      const updatedUser = await storage.getUser(userId);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating background image:", error);
      res.status(500).json({ message: "Failed to update background image" });
    }
  });
  app2.post("/api/user/generate-invite", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const inviteCode = await storage.generateInviteCode();
      await storage.updateUser(userId, { inviteCode });
      res.json({ inviteCode });
    } catch (error) {
      console.error("Error generating invite code:", error);
      res.status(500).json({ message: "Failed to generate invite code" });
    }
  });
  app2.post("/api/objects/upload", isAuthenticated, async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ error: "Failed to get upload URL" });
    }
  });
  app2.get("/objects/:objectPath(*)", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const objectFile = await objectStorageService.getObjectEntityFile(
        req.path
      );
      objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error serving object:", error);
      if (error instanceof ObjectNotFoundError) {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }
  });
  app2.put("/api/user/profile-picture", isAuthenticated, async (req, res) => {
    if (!req.body.profileImageURL) {
      return res.status(400).json({ error: "profileImageURL is required" });
    }
    const userId = req.user.claims.sub;
    try {
      const objectStorageService = new ObjectStorageService();
      const objectPath = objectStorageService.normalizeObjectEntityPath(
        req.body.profileImageURL
      );
      await storage.updateUser(userId, { profileImageUrl: objectPath });
      res.status(200).json({ objectPath });
    } catch (error) {
      console.error("Error updating profile picture:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/user/theme", async (req, res) => {
    try {
      const userId = req.user?.claims?.sub || "46297180";
      const theme = await storage.getUserTheme(userId);
      res.json(theme);
    } catch (error) {
      console.error("Error fetching theme:", error);
      res.status(500).json({ message: "Failed to fetch theme" });
    }
  });
  app2.post("/api/user/theme", async (req, res) => {
    try {
      const userId = req.user?.claims?.sub || "46297180";
      const themeData = insertUserThemeSchema.parse({ ...req.body, userId });
      const theme = await storage.upsertUserTheme(themeData);
      res.json(theme);
    } catch (error) {
      console.error("Error saving theme:", error);
      res.status(500).json({ message: "Failed to save theme" });
    }
  });
  app2.get("/api/friends", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const friends = await storage.getFriends(userId);
      res.json(friends);
    } catch (error) {
      console.error("Error fetching friends:", error);
      res.status(500).json({ message: "Failed to fetch friends" });
    }
  });
  app2.post("/api/friends/invite", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { inviteCode } = req.body;
      const isCodeUsed = await storage.isInviteCodeUsed(inviteCode);
      if (isCodeUsed) {
        return res.status(400).json({ message: "This invite code has already been used" });
      }
      const inviter = await storage.getUserByInviteCode(inviteCode);
      if (!inviter) {
        return res.status(404).json({ message: "Invalid invite code" });
      }
      if (inviter.kliqClosed) {
        return res.status(400).json({ message: "This kliq is closed to new members" });
      }
      const existingFriends = await storage.getFriends(inviter.id);
      if (existingFriends.find((f) => f.friendId === userId)) {
        return res.status(400).json({ message: "Already friends with this user" });
      }
      if (existingFriends.length >= 28) {
        return res.status(400).json({ message: "User has reached maximum friend limit" });
      }
      await storage.markInviteCodeAsUsed(inviteCode, userId, inviter.id);
      const rank = existingFriends.length + 1;
      const friendship = await storage.addFriend({
        userId: inviter.id,
        friendId: userId,
        rank,
        status: "accepted"
      });
      res.json(friendship);
    } catch (error) {
      console.error("Error joining kliq:", error);
      res.status(500).json({ message: "Failed to join kliq" });
    }
  });
  app2.put("/api/friends/:friendId/rank", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { friendId } = req.params;
      const { rank } = req.body;
      await storage.updateFriendRank(userId, friendId, rank);
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating friend rank:", error);
      res.status(500).json({ message: "Failed to update friend rank" });
    }
  });
  app2.delete("/api/friends/:friendId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { friendId } = req.params;
      await storage.removeFriend(userId, friendId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error removing friend:", error);
      res.status(500).json({ message: "Failed to remove friend" });
    }
  });
  app2.delete("/api/friends/leave-kliq", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      await storage.leaveKliq(userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error leaving kliq:", error);
      res.status(500).json({ message: "Failed to leave kliq" });
    }
  });
  app2.get("/api/posts", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const filters = await storage.getContentFilters(userId);
      const filterKeywords = filters.map((f) => f.keyword);
      const posts2 = await storage.getPosts(userId, filterKeywords);
      res.json(posts2);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });
  app2.get("/api/kliq-feed", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const cacheKey = `kliq-feed:${userId}`;
      const { getCachedOrFetch: getCachedOrFetch2 } = await Promise.resolve().then(() => (init_cache(), cache_exports));
      const feed = await getCachedOrFetch2(
        cacheKey,
        async () => {
          const filters = await storage.getContentFilters(userId);
          const filterKeywords = filters.map((f) => f.keyword);
          return await storage.getKliqFeed(userId, filterKeywords);
        },
        6e4
        // Cache for 1 minute
      );
      res.json(feed);
    } catch (error) {
      console.error("Error fetching kliq feed:", error);
      res.status(500).json({ message: "Failed to fetch kliq feed" });
    }
  });
  app2.post("/api/posts", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const processedBody = { ...req.body, userId };
      if (processedBody.latitude !== void 0 && typeof processedBody.latitude === "number") {
        processedBody.latitude = processedBody.latitude.toString();
      }
      if (processedBody.longitude !== void 0 && typeof processedBody.longitude === "number") {
        processedBody.longitude = processedBody.longitude.toString();
      }
      if (processedBody.address === void 0) {
        processedBody.address = null;
      }
      let postData = insertPostSchema.parse(processedBody);
      if (postData.mediaUrl) {
        const objectStorage = new ObjectStorageService();
        postData.mediaUrl = objectStorage.normalizeObjectEntityPath(postData.mediaUrl);
      }
      const post = await storage.createPost(postData);
      const { invalidateCache: invalidateCache2 } = await Promise.resolve().then(() => (init_cache(), cache_exports));
      invalidateCache2("kliq-feed");
      invalidateCache2("posts");
      res.json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ message: "Failed to create post" });
    }
  });
  app2.post("/api/posts/:postId/like", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { postId } = req.params;
      await storage.likePost(postId, userId);
      const post = await storage.getPostById(postId);
      console.log("Post like notification check:", { postUserId: post?.userId, currentUserId: userId, shouldNotify: post && post.userId !== userId });
      if (post) {
        const user = await storage.getUser(userId);
        if (user) {
          console.log("Creating like notification for:", post.userId, "from:", user.firstName);
          await notificationService.notifyPostLike(
            post.userId,
            user.firstName || "Someone",
            postId
          );
        }
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Error liking post:", error);
      res.status(500).json({ message: "Failed to like post" });
    }
  });
  app2.delete("/api/posts/:postId/like", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { postId } = req.params;
      await storage.unlikePost(postId, userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error unliking post:", error);
      res.status(500).json({ message: "Failed to unlike post" });
    }
  });
  app2.post("/api/posts/:postId/comments", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { postId } = req.params;
      const commentData = insertCommentSchema.parse({ ...req.body, userId, postId });
      const comment = await storage.addComment(commentData);
      const post = await storage.getPostById(postId);
      if (post) {
        const user = await storage.getUser(userId);
        if (user) {
          const commentPreview = comment.content.slice(0, 50) + (comment.content.length > 50 ? "..." : "");
          await notificationService.notifyComment(
            post.userId,
            user.firstName || "Someone",
            postId,
            commentPreview
          );
        }
      }
      res.json(comment);
    } catch (error) {
      console.error("Error adding comment:", error);
      res.status(500).json({ message: "Failed to add comment" });
    }
  });
  app2.get("/api/posts/reflect", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const reflection = await storage.getUserReflection(userId);
      res.json(reflection);
    } catch (error) {
      console.error("Error generating reflection:", error);
      res.status(500).json({ message: "Failed to generate reflection" });
    }
  });
  app2.get("/api/horoscope", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      if (!user || !user.birthdate) {
        return res.status(400).json({ message: "Birthdate required for horoscope" });
      }
      const userTimezone = req.query.timezone || "UTC";
      const zodiacSign = getZodiacSign(user.birthdate);
      const horoscope = generateDailyHoroscope(zodiacSign);
      const userDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: userTimezone
      });
      res.json({
        sign: zodiacSign,
        date: userDate,
        horoscope: horoscope.reading,
        luckyNumber: horoscope.luckyNumber,
        luckyColor: horoscope.luckyColor
      });
    } catch (error) {
      console.error("Error generating horoscope:", error);
      res.status(500).json({ message: "Failed to generate horoscope" });
    }
  });
  app2.get("/api/bible-verse", isAuthenticated, async (req, res) => {
    try {
      const userTimezone = req.query.timezone || "UTC";
      const bibleVerse = generateDailyBibleVerse();
      const userDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: userTimezone
      });
      res.json({
        date: userDate,
        verse: bibleVerse.verse,
        reference: bibleVerse.reference,
        reflection: bibleVerse.reflection
      });
    } catch (error) {
      console.error("Error generating bible verse:", error);
      res.status(500).json({ message: "Failed to generate bible verse" });
    }
  });
  app2.get("/api/filters", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const filters = await storage.getContentFilters(userId);
      res.json(filters);
    } catch (error) {
      console.error("Error fetching filters:", error);
      res.status(500).json({ message: "Failed to fetch filters" });
    }
  });
  app2.post("/api/filters", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const filterData = insertContentFilterSchema.parse({ ...req.body, userId });
      const filter = await storage.addContentFilter(filterData);
      res.json(filter);
    } catch (error) {
      console.error("Error adding filter:", error);
      res.status(500).json({ message: "Failed to add filter" });
    }
  });
  app2.delete("/api/filters/:filterId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { filterId } = req.params;
      await storage.removeContentFilter(userId, filterId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error removing filter:", error);
      res.status(500).json({ message: "Failed to remove filter" });
    }
  });
  app2.post("/api/media/upload", isAuthenticated, async (req, res) => {
    try {
      const objectStorage = new ObjectStorageService();
      const uploadURL = await objectStorage.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ message: "Failed to get upload URL" });
    }
  });
  app2.get("/objects/:objectPath(*)", async (req, res) => {
    try {
      const objectStorage = new ObjectStorageService();
      const objectFile = await objectStorage.getObjectEntityFile(req.path);
      objectStorage.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error serving media:", error);
      res.status(404).json({ message: "Media not found" });
    }
  });
  app2.get("/api/stories", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const stories2 = await storage.getActiveStories(userId);
      res.json(stories2);
    } catch (error) {
      console.error("Error fetching stories:", error);
      res.status(500).json({ message: "Failed to fetch stories" });
    }
  });
  app2.post("/api/stories", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      let storyData = insertStorySchema.parse({ ...req.body, userId });
      if (storyData.mediaUrl) {
        const objectStorage = new ObjectStorageService();
        storyData.mediaUrl = objectStorage.normalizeObjectEntityPath(storyData.mediaUrl);
      }
      const story = await storage.createStory(storyData);
      res.json(story);
    } catch (error) {
      console.error("Error creating story:", error);
      res.status(500).json({ message: "Failed to create story" });
    }
  });
  app2.post("/api/stories/:storyId/view", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { storyId } = req.params;
      await storage.viewStory(storyId, userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error viewing story:", error);
      res.status(500).json({ message: "Failed to view story" });
    }
  });
  setInterval(async () => {
    try {
      await storage.deleteExpiredMessages();
      console.log("Cleaned up expired messages");
    } catch (error) {
      console.error("Error cleaning up expired messages:", error);
    }
  }, 10 * 60 * 1e3);
  setInterval(() => {
    console.log(`Connection pool stats - Total: ${pool.totalCount}, Idle: ${pool.idleCount}, Waiting: ${pool.waitingCount}`);
  }, 5 * 60 * 1e3);
  app2.get("/internal/performance", (req, res) => {
    res.json(performanceMonitor.getPerformanceReport());
  });
  setInterval(async () => {
    try {
      await storage.deleteOldConversations();
      console.log("Cleaned up old conversations");
    } catch (error) {
      console.error("Error cleaning up old conversations:", error);
    }
  }, 60 * 60 * 1e3);
  app2.get("/api/messages/conversations", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const conversations2 = await storage.getConversations(userId);
      res.json(conversations2);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      res.status(500).json({ message: "Failed to fetch conversations" });
    }
  });
  app2.post("/api/messages/conversations", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { participantId } = req.body;
      if (!participantId) {
        return res.status(400).json({ message: "Participant ID is required" });
      }
      const conversations2 = await storage.getConversations(userId);
      const existingConversation = conversations2.find(
        (conv) => conv.otherUser.id === participantId
      );
      if (existingConversation) {
        return res.json({ id: participantId });
      }
      const conversation = await storage.createConversation({
        participantIds: [userId, participantId]
      });
      res.json({ id: participantId });
    } catch (error) {
      console.error("Error creating conversation:", error);
      res.status(500).json({ message: "Failed to create conversation" });
    }
  });
  app2.get("/api/messages/conversation/:otherUserId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { otherUserId } = req.params;
      const conversation = await storage.getConversation(userId, otherUserId);
      if (!conversation) {
        return res.json({ messages: [] });
      }
      res.json(conversation);
    } catch (error) {
      console.error("Error fetching conversation:", error);
      res.status(500).json({ message: "Failed to fetch conversation" });
    }
  });
  app2.post("/api/messages/send", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { receiverId, content, mediaUrl, mediaType, gifId, movieconId } = req.body;
      if (!receiverId || !content?.trim() && !mediaUrl && !gifId && !movieconId) {
        console.log("Validation failed:", { receiverId, content: content?.trim(), mediaUrl, gifId, movieconId });
        return res.status(400).json({ message: "receiverId and at least one content type (text, media, gif, or moviecon) are required" });
      }
      const [sender, receiver] = await Promise.all([
        storage.getUser(userId),
        storage.getUser(receiverId)
      ]);
      if (!sender) {
        console.log("Sender not found:", userId);
        return res.status(400).json({ message: "Sender user not found" });
      }
      if (!receiver) {
        console.log("Receiver not found:", receiverId);
        return res.status(400).json({ message: "Receiver user not found" });
      }
      const messageData = {
        senderId: userId,
        receiverId,
        content: content?.trim() || null,
        mediaUrl: mediaUrl || null,
        mediaType: mediaType || null,
        gifId: gifId || null,
        movieconId: movieconId || null
      };
      const message = await storage.sendMessage(messageData);
      if (receiverId !== userId) {
        const sender2 = await storage.getUser(userId);
        if (sender2) {
          let messagePreview = "";
          if (content?.trim()) {
            messagePreview = content.trim().slice(0, 30) + (content.trim().length > 30 ? "..." : "");
          } else if (mediaUrl) {
            messagePreview = mediaType === "image" ? "\u{1F4F7} Photo" : "\u{1F3A5} Video";
          } else if (gifId) {
            messagePreview = "\u{1F3AD} GIF";
          } else if (movieconId) {
            messagePreview = "\u{1F3AC} Moviecon";
          }
          await notificationService.notifyNewMessage(
            receiverId,
            userId,
            sender2.firstName || "Someone",
            messagePreview
          );
        }
      }
      res.json(message);
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
  app2.put("/api/messages/:messageId/read", isAuthenticated, async (req, res) => {
    try {
      const { messageId } = req.params;
      await storage.markMessageAsRead(messageId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ message: "Failed to mark message as read" });
    }
  });
  app2.put("/api/messages/conversation/:conversationId/read", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { conversationId } = req.params;
      await storage.markConversationAsRead(conversationId, userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking conversation as read:", error);
      res.status(500).json({ message: "Failed to mark conversation as read" });
    }
  });
  app2.post("/api/messages/cleanup-expired", isAuthenticated, async (req, res) => {
    try {
      await storage.deleteExpiredMessages();
      res.json({ success: true, message: "Expired messages cleaned up" });
    } catch (error) {
      console.error("Error cleaning up expired messages:", error);
      res.status(500).json({ message: "Failed to cleanup expired messages" });
    }
  });
  app2.post("/api/messages/cleanup-old-conversations", isAuthenticated, async (req, res) => {
    try {
      await storage.deleteOldConversations();
      res.json({ success: true, message: "Old conversations cleaned up" });
    } catch (error) {
      console.error("Error cleaning up old conversations:", error);
      res.status(500).json({ message: "Failed to cleanup old conversations" });
    }
  });
  app2.get("/api/events", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const events2 = await storage.getEvents(userId);
      res.json(events2);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });
  app2.post("/api/events", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const eventData = insertEventSchema.parse({ ...req.body, userId });
      if (eventData.mediaUrl) {
        const objectStorage = new ObjectStorageService();
        eventData.mediaUrl = objectStorage.normalizeObjectEntityPath(eventData.mediaUrl);
      }
      const event = await storage.createEvent(eventData);
      res.json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ message: "Failed to create event" });
    }
  });
  app2.put("/api/events/:eventId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { eventId } = req.params;
      const existingEvent = await storage.getEventById(eventId);
      if (!existingEvent || existingEvent.userId !== userId) {
        return res.status(403).json({ message: "You can only edit your own events" });
      }
      const eventData = insertEventSchema.partial().parse(req.body);
      if (eventData.mediaUrl) {
        const objectStorage = new ObjectStorageService();
        eventData.mediaUrl = objectStorage.normalizeObjectEntityPath(eventData.mediaUrl);
      }
      const updatedEvent = await storage.updateEvent(eventId, eventData);
      res.json(updatedEvent);
    } catch (error) {
      console.error("Error updating event:", error);
      res.status(500).json({ message: "Failed to update event" });
    }
  });
  app2.get("/api/events/:eventId/attendance", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { eventId } = req.params;
      const attendance = await storage.getUserEventAttendance(eventId, userId);
      res.json(attendance || { status: null });
    } catch (error) {
      console.error("Error fetching attendance:", error);
      res.status(500).json({ message: "Failed to fetch attendance" });
    }
  });
  app2.post("/api/events/:eventId/attendance", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { eventId } = req.params;
      const { status } = req.body;
      if (!["going", "maybe", "not_going"].includes(status)) {
        return res.status(400).json({ message: "Invalid attendance status" });
      }
      const event = await storage.getEventById(eventId);
      const user = await storage.getUser(userId);
      if (!event || !user) {
        return res.status(404).json({ message: "Event or user not found" });
      }
      await storage.updateEventAttendance(eventId, userId, status);
      const { NotificationService: NotificationService2 } = await Promise.resolve().then(() => (init_notificationService(), notificationService_exports));
      const notificationService2 = new NotificationService2();
      if (event.userId !== userId) {
        const statusText = status === "going" ? "\u2705 Going" : status === "maybe" ? "\u2753 Maybe" : "\u274C Can't Go";
        await notificationService2.createNotification({
          userId: event.userId,
          type: "event_invite",
          title: "Event Attendance Updated",
          message: `${user.firstName} ${user.lastName} responded ${statusText} to "${event.title}"`,
          relatedId: eventId,
          relatedType: "event"
        });
      } else {
        const statusText = status === "going" ? "\u2705 Going" : status === "maybe" ? "\u2753 Maybe" : "\u274C Can't Go";
        await notificationService2.createNotification({
          userId,
          type: "event_invite",
          title: "Event Attendance Updated",
          message: `You updated your attendance to ${statusText} for "${event.title}"`,
          relatedId: eventId,
          relatedType: "event"
        });
      }
      const otherAttendees = await storage.getEventAttendees(eventId);
      for (const attendee of otherAttendees) {
        if (attendee.userId !== userId && attendee.userId !== event.userId) {
          const statusText = status === "going" ? "\u2705 is going" : status === "maybe" ? "\u2753 might go" : "\u274C can't go";
          await notificationService2.createNotification({
            userId: attendee.userId,
            type: "event_invite",
            title: "Event Attendance Update",
            message: `${user.firstName} ${user.lastName} ${statusText} to "${event.title}"`,
            relatedId: eventId,
            relatedType: "event"
          });
        }
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating attendance:", error);
      console.error("Error details:", error.stack);
      res.status(500).json({ message: "Failed to update attendance" });
    }
  });
  app2.get("/api/actions", isAuthenticated, async (req, res) => {
    try {
      const actions2 = await storage.getActions();
      res.json(actions2);
    } catch (error) {
      console.error("Error fetching actions:", error);
      res.status(500).json({ message: "Failed to fetch actions" });
    }
  });
  app2.get("/api/actions/:actionId", isAuthenticated, async (req, res) => {
    try {
      const { actionId } = req.params;
      const action = await storage.getActionById(actionId);
      if (!action) {
        return res.status(404).json({ message: "Action not found" });
      }
      res.json(action);
    } catch (error) {
      console.error("Error fetching action:", error);
      res.status(500).json({ message: "Failed to fetch action" });
    }
  });
  app2.post("/api/actions", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { insertActionSchema: insertActionSchema3 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const streamKey = req.body.streamKey || `stream_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const actionData = insertActionSchema3.parse({
        ...req.body,
        userId,
        streamKey
      });
      const action = await storage.createAction(actionData);
      const postContent = `\u{1F534} LIVE: Streaming "${action.title}" right now! ${action.description ? action.description : ""}`;
      const autoPost = await storage.createPost({
        userId,
        content: postContent.trim(),
        mediaUrl: null,
        mediaType: null,
        gifId: null,
        movieconId: null
      });
      res.json(action);
    } catch (error) {
      console.error("Error creating action:", error);
      res.status(500).json({ message: "Failed to create action" });
    }
  });
  app2.put("/api/actions/:actionId/end", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { actionId } = req.params;
      const action = await storage.getActionById(actionId);
      if (!action || action.userId !== userId) {
        return res.status(403).json({ message: "Not authorized to end this action" });
      }
      const endedAction = await storage.endAction(actionId);
      res.json(endedAction);
    } catch (error) {
      console.error("Error ending action:", error);
      res.status(500).json({ message: "Failed to end action" });
    }
  });
  app2.post("/api/actions/:actionId/join", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { actionId } = req.params;
      await storage.joinAction(actionId, userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error joining action:", error);
      res.status(500).json({ message: "Failed to join action" });
    }
  });
  app2.post("/api/actions/:actionId/leave", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { actionId } = req.params;
      await storage.leaveAction(actionId, userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error leaving action:", error);
      res.status(500).json({ message: "Failed to leave action" });
    }
  });
  app2.get("/api/actions/:actionId/chat", isAuthenticated, async (req, res) => {
    try {
      const { actionId } = req.params;
      const messages2 = await storage.getActionChatMessages(actionId);
      res.json(messages2);
    } catch (error) {
      console.error("Error fetching action chat:", error);
      res.status(500).json({ message: "Failed to fetch chat messages" });
    }
  });
  app2.post("/api/actions/:actionId/chat", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { actionId } = req.params;
      const { insertActionChatMessageSchema: insertActionChatMessageSchema2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const messageData = insertActionChatMessageSchema2.parse({
        ...req.body,
        actionId,
        userId
      });
      const message = await storage.addActionChatMessage(messageData);
      res.json(message);
    } catch (error) {
      console.error("Error sending chat message:", error);
      res.status(500).json({ message: "Failed to send chat message" });
    }
  });
  app2.post("/api/auth/send-verification", async (req, res) => {
    try {
      const { phoneNumber, inviteCode } = req.body;
      if (inviteCode) {
        const inviteCodeUser = await storage.getUserByInviteCode(inviteCode);
        if (!inviteCodeUser) {
          return res.status(400).json({
            message: "Invalid invite code. Please check the code and try again."
          });
        }
        const isUsed = await storage.isInviteCodeUsed(inviteCode);
        if (isUsed) {
          return res.status(400).json({
            message: "This invite code has already been used."
          });
        }
      }
      const verificationCode = Math.floor(1e5 + Math.random() * 9e5).toString();
      console.log(`Mock SMS to ${phoneNumber}: Your verification code is ${verificationCode}`);
      res.json({
        success: true,
        message: "Verification code sent",
        mockCode: verificationCode
        // Remove in production
      });
    } catch (error) {
      console.error("Error sending verification:", error);
      res.status(500).json({ message: "Failed to send verification" });
    }
  });
  app2.post("/api/auth/verify-phone", async (req, res) => {
    try {
      const { phoneNumber, verificationCode, inviteCode } = req.body;
      if (inviteCode) {
        const inviteCodeUser = await storage.getUserByInviteCode(inviteCode);
        if (!inviteCodeUser) {
          return res.status(400).json({
            message: "Invalid invite code. Please check the code and try again."
          });
        }
        const isUsed = await storage.isInviteCodeUsed(inviteCode);
        if (isUsed) {
          return res.status(400).json({
            message: "This invite code has already been used."
          });
        }
      }
      res.json({ success: true, verified: true });
    } catch (error) {
      console.error("Error verifying phone:", error);
      res.status(500).json({ message: "Failed to verify phone" });
    }
  });
  app2.get("/api/meetups", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const meetups2 = await storage.getMeetups(userId);
      res.json(meetups2);
    } catch (error) {
      console.error("Error fetching meetups:", error);
      res.status(500).json({ message: "Failed to fetch meetups" });
    }
  });
  app2.get("/api/meetups/nearby", isAuthenticated, async (req, res) => {
    try {
      const { lat, lng, radius = 5 } = req.query;
      if (!lat || !lng) {
        return res.status(400).json({ message: "Latitude and longitude are required" });
      }
      const latitude = parseFloat(lat);
      const longitude = parseFloat(lng);
      const radiusKm = parseFloat(radius);
      const nearbyMeetups = await storage.getNearbyMeetups(latitude, longitude, radiusKm);
      res.json(nearbyMeetups);
    } catch (error) {
      console.error("Error fetching nearby meetups:", error);
      res.status(500).json({ message: "Failed to fetch nearby meetups" });
    }
  });
  app2.get("/api/meetups/:meetupId", isAuthenticated, async (req, res) => {
    try {
      const { meetupId } = req.params;
      const meetup = await storage.getMeetupById(meetupId);
      if (!meetup) {
        return res.status(404).json({ message: "Meetup not found" });
      }
      res.json(meetup);
    } catch (error) {
      console.error("Error fetching meetup:", error);
      res.status(500).json({ message: "Failed to fetch meetup" });
    }
  });
  app2.post("/api/meetups", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const meetupData = insertMeetupSchema.parse({
        ...req.body,
        userId
      });
      const meetup = await storage.createMeetup(meetupData);
      res.json(meetup);
    } catch (error) {
      console.error("Error creating meetup:", error);
      res.status(500).json({ message: "Failed to create meetup" });
    }
  });
  app2.put("/api/meetups/:meetupId/end", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { meetupId } = req.params;
      const meetup = await storage.getMeetupById(meetupId);
      if (!meetup || meetup.userId !== userId) {
        return res.status(403).json({ message: "Not authorized to end this meetup" });
      }
      const endedMeetup = await storage.endMeetup(meetupId);
      res.json(endedMeetup);
    } catch (error) {
      console.error("Error ending meetup:", error);
      res.status(500).json({ message: "Failed to end meetup" });
    }
  });
  app2.post("/api/meetups/:meetupId/checkin", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { meetupId } = req.params;
      const { latitude, longitude } = req.body;
      if (!latitude || !longitude) {
        return res.status(400).json({ message: "Location coordinates are required" });
      }
      const checkInData = insertMeetupCheckInSchema.parse({
        meetupId,
        userId,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
      });
      const checkIn = await storage.checkInToMeetup(checkInData);
      const isVerified = await storage.verifyLocationCheckIn(
        meetupId,
        userId,
        parseFloat(latitude),
        parseFloat(longitude)
      );
      res.json({
        checkIn,
        verified: isVerified,
        message: isVerified ? "Successfully checked in!" : "Check-in recorded, but location verification failed. You may be too far from the meetup location."
      });
    } catch (error) {
      console.error("Error checking in to meetup:", error);
      res.status(500).json({ message: "Failed to check in to meetup" });
    }
  });
  app2.post("/api/meetups/:meetupId/checkout", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { meetupId } = req.params;
      await storage.checkOutFromMeetup(meetupId, userId);
      res.json({ success: true, message: "Successfully checked out!" });
    } catch (error) {
      console.error("Error checking out from meetup:", error);
      res.status(500).json({ message: "Failed to check out from meetup" });
    }
  });
  app2.post("/api/checkin", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { latitude, longitude, locationName, address, emoji } = req.body;
      const post = await storage.createPost({
        userId,
        content: `${emoji ? emoji + " " : ""}Checked in at ${locationName}`,
        latitude: latitude?.toString(),
        longitude: longitude?.toString(),
        locationName,
        address
      });
      res.json(post);
    } catch (error) {
      console.error("Error checking in:", error);
      res.status(500).json({ message: "Failed to check in" });
    }
  });
  app2.get("/api/gifs", async (req, res) => {
    try {
      const gifs2 = await storage.getAllGifs();
      res.json(gifs2);
    } catch (error) {
      console.error("Error fetching gifs:", error);
      res.status(500).json({ message: "Failed to fetch gifs" });
    }
  });
  app2.get("/api/gifs/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const gifs2 = await storage.getGifsByCategory(category);
      res.json(gifs2);
    } catch (error) {
      console.error("Error fetching gifs by category:", error);
      res.status(500).json({ message: "Failed to fetch gifs by category" });
    }
  });
  app2.get("/api/gifs/trending", async (req, res) => {
    try {
      const gifs2 = await storage.getTrendingGifs();
      res.json(gifs2);
    } catch (error) {
      console.error("Error fetching trending gifs:", error);
      res.status(500).json({ message: "Failed to fetch trending gifs" });
    }
  });
  app2.get("/api/gifs/featured", async (req, res) => {
    try {
      const gifs2 = await storage.getFeaturedGifs();
      res.json(gifs2);
    } catch (error) {
      console.error("Error fetching featured gifs:", error);
      res.status(500).json({ message: "Failed to fetch featured gifs" });
    }
  });
  app2.get("/api/gifs/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        return res.status(400).json({ message: "Search query is required" });
      }
      const gifs2 = await storage.searchGifs(q);
      res.json(gifs2);
    } catch (error) {
      console.error("Error searching gifs:", error);
      res.status(500).json({ message: "Failed to search gifs" });
    }
  });
  app2.get("/api/gifs/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const gif = await storage.getGifById(id);
      if (!gif) {
        return res.status(404).json({ message: "GIF not found" });
      }
      res.json(gif);
    } catch (error) {
      console.error("Error fetching gif:", error);
      res.status(500).json({ message: "Failed to fetch gif" });
    }
  });
  app2.post("/api/gifs", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const gifData = insertGifSchema.parse({
        ...req.body,
        uploadedBy: userId
      });
      const gif = await storage.createGif(gifData);
      res.json(gif);
    } catch (error) {
      console.error("Error creating gif:", error);
      res.status(500).json({ message: "Failed to create gif" });
    }
  });
  app2.put("/api/gifs/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const gif = await storage.updateGif(id, updates);
      res.json(gif);
    } catch (error) {
      console.error("Error updating gif:", error);
      res.status(500).json({ message: "Failed to update gif" });
    }
  });
  app2.delete("/api/gifs/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteGif(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting gif:", error);
      res.status(500).json({ message: "Failed to delete gif" });
    }
  });
  app2.get("/api/moviecons", async (req, res) => {
    try {
      const { q } = req.query;
      let moviecons2;
      if (q && typeof q === "string") {
        moviecons2 = await storage.searchMoviecons(q);
      } else {
        moviecons2 = await storage.getAllMoviecons();
      }
      res.json(moviecons2);
    } catch (error) {
      console.error("Error fetching moviecons:", error);
      res.status(500).json({ message: "Failed to fetch moviecons" });
    }
  });
  app2.get("/api/moviecons/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const moviecons2 = await storage.getMovieconsByCategory(category);
      res.json(moviecons2);
    } catch (error) {
      console.error("Error fetching moviecons by category:", error);
      res.status(500).json({ message: "Failed to fetch moviecons by category" });
    }
  });
  app2.get("/api/moviecons/trending", async (req, res) => {
    try {
      const moviecons2 = await storage.getTrendingMoviecons();
      res.json(moviecons2);
    } catch (error) {
      console.error("Error fetching trending moviecons:", error);
      res.status(500).json({ message: "Failed to fetch trending moviecons" });
    }
  });
  app2.get("/api/moviecons/featured", async (req, res) => {
    try {
      const moviecons2 = await storage.getFeaturedMoviecons();
      res.json(moviecons2);
    } catch (error) {
      console.error("Error fetching featured moviecons:", error);
      res.status(500).json({ message: "Failed to fetch featured moviecons" });
    }
  });
  app2.get("/api/moviecons/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        return res.status(400).json({ message: "Search query is required" });
      }
      const moviecons2 = await storage.searchMoviecons(q);
      res.json(moviecons2);
    } catch (error) {
      console.error("Error searching moviecons:", error);
      res.status(500).json({ message: "Failed to search moviecons" });
    }
  });
  app2.get("/api/moviecons/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const moviecon = await storage.getMovieconById(id);
      if (!moviecon) {
        return res.status(404).json({ message: "Moviecon not found" });
      }
      res.json(moviecon);
    } catch (error) {
      console.error("Error fetching moviecon:", error);
      res.status(500).json({ message: "Failed to fetch moviecon" });
    }
  });
  app2.post("/api/moviecons", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { title, url, videoUrl } = req.body;
      const videoUrlValue = videoUrl || url;
      if (!title || !videoUrlValue) {
        return res.status(400).json({ message: "Title and video URL are required" });
      }
      const objectStorageService = new ObjectStorageService();
      let normalizedUrl = videoUrlValue;
      if (videoUrlValue.includes("storage.googleapis.com") || videoUrlValue.startsWith("/objects/")) {
        normalizedUrl = objectStorageService.normalizeObjectEntityPath(videoUrlValue);
      }
      const moviecon = await storage.createMoviecon({
        id: `mv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title,
        videoUrl: normalizedUrl,
        duration: 0,
        // Will be determined later if needed
        uploadedBy: userId
      });
      res.json(moviecon);
    } catch (error) {
      console.error("Error creating moviecon:", error);
      res.status(500).json({ message: "Failed to create moviecon" });
    }
  });
  app2.put("/api/moviecons/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const moviecon = await storage.updateMoviecon(id, updates);
      res.json(moviecon);
    } catch (error) {
      console.error("Error updating moviecon:", error);
      res.status(500).json({ message: "Failed to update moviecon" });
    }
  });
  app2.delete("/api/moviecons/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteMoviecon(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting moviecon:", error);
      res.status(500).json({ message: "Failed to delete moviecon" });
    }
  });
  app2.get("/api/polls", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const polls2 = await storage.getPolls(userId);
      res.json(polls2);
    } catch (error) {
      console.error("Error fetching polls:", error);
      res.status(500).json({ message: "Failed to fetch polls" });
    }
  });
  app2.post("/api/polls", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { expiresAt, ...otherData } = req.body;
      const pollData = insertPollSchema.parse({
        ...otherData,
        userId,
        expiresAt: new Date(expiresAt)
        // Convert string to Date object
      });
      const poll = await storage.createPoll(pollData);
      res.json(poll);
    } catch (error) {
      console.error("Error creating poll:", error);
      res.status(500).json({ message: "Failed to create poll" });
    }
  });
  app2.get("/api/polls/:pollId", isAuthenticated, async (req, res) => {
    try {
      const { pollId } = req.params;
      const poll = await storage.getPollById(pollId);
      if (!poll) {
        return res.status(404).json({ message: "Poll not found" });
      }
      res.json(poll);
    } catch (error) {
      console.error("Error fetching poll:", error);
      res.status(500).json({ message: "Failed to fetch poll" });
    }
  });
  app2.post("/api/polls/:pollId/vote", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { pollId } = req.params;
      const { selectedOption } = req.body;
      if (typeof selectedOption !== "number") {
        return res.status(400).json({ message: "Selected option must be a number" });
      }
      const voteData = insertPollVoteSchema.parse({
        pollId,
        userId,
        selectedOption
      });
      const vote = await storage.votePoll(voteData);
      console.log(`User ${userId} voted ${selectedOption} on poll ${pollId}`);
      const updatedResults = await storage.getPollResults(pollId);
      console.log(`Updated poll results for ${pollId}:`, updatedResults);
      res.json({ vote, results: updatedResults });
    } catch (error) {
      console.error("Error voting on poll:", error);
      res.status(500).json({ message: "Failed to vote on poll" });
    }
  });
  app2.get("/api/polls/:pollId/results", isAuthenticated, async (req, res) => {
    try {
      const { pollId } = req.params;
      const results = await storage.getPollResults(pollId);
      res.set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      });
      console.log(`Poll ${pollId} results:`, results);
      res.json(results);
    } catch (error) {
      console.error("Error fetching poll results:", error);
      res.status(500).json({ message: "Failed to fetch poll results" });
    }
  });
  app2.post("/api/video-calls", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { participantIds } = req.body;
      if (!participantIds || !Array.isArray(participantIds)) {
        return res.status(400).json({ message: "Invalid participant IDs" });
      }
      const call = await storage.createVideoCall({
        initiatorId: userId,
        status: "pending"
      });
      await storage.addCallParticipant({
        callId: call.id,
        userId,
        status: "joined"
      });
      for (const participantId of participantIds) {
        if (participantId !== userId) {
          await storage.addCallParticipant({
            callId: call.id,
            userId: participantId,
            status: "invited"
          });
        }
      }
      const callWithParticipants = {
        ...call,
        participants: await storage.getCallParticipants(call.id)
      };
      res.json(callWithParticipants);
    } catch (error) {
      console.error("Error creating video call:", error);
      res.status(500).json({ message: "Failed to create video call" });
    }
  });
  app2.post("/api/video-calls/:callId/join", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { callId } = req.params;
      await storage.updateParticipantStatus(callId, userId, "joined", /* @__PURE__ */ new Date());
      res.json({ message: "Joined call successfully" });
    } catch (error) {
      console.error("Error joining video call:", error);
      res.status(500).json({ message: "Failed to join video call" });
    }
  });
  app2.post("/api/video-calls/:callId/leave", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { callId } = req.params;
      await storage.updateParticipantStatus(callId, userId, "left", void 0, /* @__PURE__ */ new Date());
      res.json({ message: "Left call successfully" });
    } catch (error) {
      console.error("Error leaving video call:", error);
      res.status(500).json({ message: "Failed to leave video call" });
    }
  });
  app2.post("/api/video-calls/:callId/end", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { callId } = req.params;
      const call = await storage.getVideoCall(callId);
      if (!call || call.initiatorId !== userId) {
        return res.status(403).json({ message: "Only call initiator can end the call" });
      }
      await storage.updateVideoCallStatus(callId, "ended", void 0, /* @__PURE__ */ new Date());
      res.json({ message: "Call ended successfully" });
    } catch (error) {
      console.error("Error ending video call:", error);
      res.status(500).json({ message: "Failed to end video call" });
    }
  });
  app2.get("/api/video-calls/active", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const activeCalls = await storage.getUserActiveCalls(userId);
      res.json(activeCalls);
    } catch (error) {
      console.error("Error fetching active calls:", error);
      res.status(500).json({ message: "Failed to fetch active calls" });
    }
  });
  app2.get("/api/birthdays/today", isAuthenticated, async (req, res) => {
    try {
      const birthdayUsers = await storage.getUsersWithBirthdayToday();
      res.json(birthdayUsers);
    } catch (error) {
      console.error("Error fetching birthday users:", error);
      res.status(500).json({ message: "Failed to fetch birthday users" });
    }
  });
  app2.patch("/api/user/birthdate", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { birthdate } = req.body;
      const updatedUser = await storage.updateUser(userId, { birthdate });
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating birthdate:", error);
      res.status(500).json({ message: "Failed to update birthdate" });
    }
  });
  app2.post("/api/birthdays/send-message", isAuthenticated, async (req, res) => {
    try {
      const senderId = req.user.claims.sub;
      const { birthdayUserId, message } = req.body;
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      const existingMessages = await storage.getBirthdayMessagesSentThisYear(birthdayUserId, currentYear);
      const alreadySent = existingMessages.some((msg) => msg.senderUserId === senderId);
      if (alreadySent) {
        return res.status(400).json({ message: "Birthday message already sent this year" });
      }
      const birthdayUser = await storage.getUser(birthdayUserId);
      if (!birthdayUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const post = await storage.createPost({
        userId: senderId,
        content: `\u{1F389} Happy Birthday ${birthdayUser.firstName}! ${message}`
      });
      const birthdayMessage = await storage.createBirthdayMessage({
        birthdayUserId,
        senderUserId: senderId,
        message,
        year: currentYear,
        postId: post.id
      });
      res.json({ success: true, post, birthdayMessage });
    } catch (error) {
      console.error("Error sending birthday message:", error);
      res.status(500).json({ message: "Failed to send birthday message" });
    }
  });
  app2.post("/api/chatbot/conversation", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { conversationHistory, timestamp: timestamp2, messageCount } = req.body;
      console.log("Chatbot conversation endpoint called:", { userId, hasConversation: !!conversationHistory, messageCount });
      if (!conversationHistory) {
        return res.status(400).json({ message: "conversationHistory is required" });
      }
      const user = await storage.getUser(userId);
      console.log("Retrieved user for email:", { userId, hasUser: !!user, userEmail: user?.email });
      const conversationData = {
        conversationHistory,
        timestamp: timestamp2 || (/* @__PURE__ */ new Date()).toISOString(),
        userId,
        userEmail: user?.email || void 0,
        messageCount: messageCount || 0
      };
      console.log("Attempting to send complete chatbot conversation email...");
      const emailSent = await sendChatbotConversation(conversationData);
      console.log("Email send result:", emailSent);
      if (!emailSent) {
        console.warn("Failed to send chatbot conversation email, but conversation was processed");
      }
      res.json({
        success: true,
        emailSent,
        message: "Complete conversation processed and email sent"
      });
    } catch (error) {
      console.error("Error processing chatbot conversation:", error);
      res.status(500).json({ message: "Failed to process chatbot conversation" });
    }
  });
  app2.get("/api/notifications", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { type } = req.query;
      const notifications2 = await notificationService.getUserNotifications(userId, type);
      console.log("Fetching notifications for user:", userId, "type:", type, "count:", notifications2.length);
      res.json(notifications2);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });
  app2.patch("/api/notifications/mark-all-read", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { type } = req.body;
      const notifications2 = await notificationService.markAllAsRead(userId, type);
      res.json(notifications2);
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
      res.status(500).json({ message: "Failed to mark notifications as read" });
    }
  });
  app2.delete("/api/notifications/delete-all", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { type } = req.body;
      const notifications2 = await notificationService.deleteAllNotifications(userId, type);
      res.json(notifications2);
    } catch (error) {
      console.error("Error deleting all notifications:", error);
      res.status(500).json({ message: "Failed to delete all notifications" });
    }
  });
  app2.patch("/api/notifications/:id", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { id } = req.params;
      const { isRead } = req.body;
      if (isRead) {
        const notification = await notificationService.markAsRead(id, userId);
        res.json(notification);
      } else {
        res.status(400).json({ message: "Invalid update operation" });
      }
    } catch (error) {
      console.error("Error updating notification:", error);
      res.status(500).json({ message: "Failed to update notification" });
    }
  });
  app2.delete("/api/notifications/:id", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { id } = req.params;
      const notification = await notificationService.deleteNotification(id, userId);
      res.json(notification);
    } catch (error) {
      console.error("Error deleting notification:", error);
      res.status(500).json({ message: "Failed to delete notification" });
    }
  });
  app2.post("/api/notifications/demo", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { type, title, message } = req.body;
      console.log("Creating demo notification for user:", userId, "type:", type);
      const actionUrls = {
        message: "/messages",
        event_invite: "/events",
        friend_request: "/kliq",
        post_like: "/bulletin"
      };
      const notification = await notificationService.createNotification({
        userId,
        type: type || "post_like",
        title: title || "Demo Notification",
        message: message || "This is a test notification to verify the system works!",
        actionUrl: actionUrls[type] || "/bulletin",
        relatedId: `demo-${type}-id`,
        relatedType: type === "message" ? "conversation" : type === "event_invite" ? "event" : type === "friend_request" ? "user" : "post",
        priority: "normal"
      });
      console.log("Demo notification created successfully:", notification);
      res.json(notification);
    } catch (error) {
      console.error("Error creating demo notification:", error);
      res.status(500).json({ message: "Failed to create demo notification" });
    }
  });
  app2.post("/api/notifications/test-im", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const notification = await notificationService.createNotification({
        userId,
        type: "message",
        title: "New IM from Alex",
        message: "Alex: Hey! How was your day? Want to hang out later?",
        actionUrl: "/messages",
        relatedId: "mock-conversation-id",
        relatedType: "conversation",
        priority: "medium"
      });
      console.log("Test IM notification created:", notification);
      res.json({ success: true, notification });
    } catch (error) {
      console.error("Error creating test IM notification:", error);
      res.status(500).json({ message: "Failed to create test IM notification" });
    }
  });
  app2.post("/api/notifications/test", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const testNotifications = [
        {
          userId,
          type: "message",
          title: "New Message",
          message: "Alex sent you a message",
          actionUrl: "/messages",
          priority: "medium"
        },
        {
          userId,
          type: "friend_request",
          title: "Friend Request",
          message: "Jordan wants to join your kliq",
          actionUrl: "/kliq",
          priority: "high"
        },
        {
          userId,
          type: "event_invite",
          title: "Event Invitation",
          message: "You are invited to Movie Night",
          actionUrl: "/events",
          priority: "medium"
        }
      ];
      const createdNotifications = [];
      for (const notificationData of testNotifications) {
        const notification = await notificationService.createNotification(notificationData);
        createdNotifications.push(notification);
      }
      res.json({
        success: true,
        created: createdNotifications.length,
        notifications: createdNotifications
      });
    } catch (error) {
      console.error("Error creating test notifications:", error);
      res.status(500).json({ message: "Failed to create test notifications" });
    }
  });
  app2.get("/api/ads/targeted", async (req, res) => {
    try {
      const userId = req.user?.claims?.sub || "46297180";
      const ads = await storage.getTargetedAds(userId);
      console.log(`Fetched ${ads.length} targeted ads for user ${userId}`);
      res.json(ads);
    } catch (error) {
      console.error("Error fetching targeted ads:", error);
      res.status(500).json({ message: "Failed to fetch ads" });
    }
  });
  app2.get("/api/ads", isAuthenticated, async (req, res) => {
    try {
      const ads = await storage.getAllAds();
      res.json(ads);
    } catch (error) {
      console.error("Error fetching ads:", error);
      res.status(500).json({ message: "Failed to fetch ads" });
    }
  });
  app2.post("/api/ads", isAuthenticated, async (req, res) => {
    try {
      const ad = await storage.createAd(req.body);
      res.json(ad);
    } catch (error) {
      console.error("Error creating ad:", error);
      res.status(500).json({ message: "Failed to create ad" });
    }
  });
  app2.patch("/api/ads/:id", isAuthenticated, async (req, res) => {
    try {
      const ad = await storage.updateAd(req.params.id, req.body);
      res.json(ad);
    } catch (error) {
      console.error("Error updating ad:", error);
      res.status(500).json({ message: "Failed to update ad" });
    }
  });
  app2.patch("/api/ads/:id/status", isAuthenticated, async (req, res) => {
    try {
      const { status } = req.body;
      const ad = await storage.updateAdStatus(req.params.id, status);
      res.json(ad);
    } catch (error) {
      console.error("Error updating ad status:", error);
      res.status(500).json({ message: "Failed to update ad status" });
    }
  });
  app2.delete("/api/ads/:id", isAuthenticated, async (req, res) => {
    try {
      await storage.deleteAd(req.params.id);
      res.json({ message: "Ad deleted successfully" });
    } catch (error) {
      console.error("Error deleting ad:", error);
      res.status(500).json({ message: "Failed to delete ad" });
    }
  });
  app2.get("/api/ads", isAuthenticated, async (req, res) => {
    try {
      const ads = await storage.getAllActiveAds();
      res.json(ads);
    } catch (error) {
      console.error("Error fetching ads:", error);
      res.status(500).json({ message: "Failed to fetch ads" });
    }
  });
  app2.post("/api/ads", isAuthenticated, async (req, res) => {
    try {
      const adData = insertSponsoredAdSchema.parse(req.body);
      const ad = await storage.createSponsoredAd(adData);
      res.json(ad);
    } catch (error) {
      console.error("Error creating ad:", error);
      res.status(500).json({ message: "Failed to create ad" });
    }
  });
  app2.put("/api/ads/:adId", isAuthenticated, async (req, res) => {
    try {
      const { adId } = req.params;
      const updates = req.body;
      const ad = await storage.updateSponsoredAd(adId, updates);
      res.json(ad);
    } catch (error) {
      console.error("Error updating ad:", error);
      res.status(500).json({ message: "Failed to update ad" });
    }
  });
  app2.delete("/api/ads/:adId", isAuthenticated, async (req, res) => {
    try {
      const { adId } = req.params;
      await storage.deleteSponsoredAd(adId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting ad:", error);
      res.status(500).json({ message: "Failed to delete ad" });
    }
  });
  app2.post("/api/ads/:adId/impression", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { adId } = req.params;
      const interaction = await storage.recordAdImpression({
        adId,
        userId,
        interactionType: "impression"
      });
      res.json(interaction);
    } catch (error) {
      console.error("Error recording ad impression:", error);
      res.status(500).json({ message: "Failed to record impression" });
    }
  });
  app2.post("/api/ads/:adId/click", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { adId } = req.params;
      const interaction = await storage.recordAdClick({
        adId,
        userId,
        interactionType: "click"
      });
      res.json(interaction);
    } catch (error) {
      console.error("Error recording ad click:", error);
      res.status(500).json({ message: "Failed to record click" });
    }
  });
  app2.get("/api/ads/:adId/analytics", isAuthenticated, async (req, res) => {
    try {
      const { adId } = req.params;
      const analytics = await storage.getAdAnalytics(adId);
      res.json(analytics);
    } catch (error) {
      console.error("Error fetching ad analytics:", error);
      res.status(500).json({ message: "Failed to fetch analytics" });
    }
  });
  app2.get("/api/user/ad-preferences", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const preferences = await storage.getUserAdPreferences(userId);
      res.json(preferences || {
        enableTargetedAds: true,
        maxAdsPerDay: 5,
        blockedCategories: []
      });
    } catch (error) {
      console.error("Error fetching ad preferences:", error);
      res.status(500).json({ message: "Failed to fetch preferences" });
    }
  });
  app2.put("/api/user/ad-preferences", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const preferencesData = insertUserAdPreferencesSchema.parse(req.body);
      const preferences = await storage.updateUserAdPreferences(userId, preferencesData);
      res.json(preferences);
    } catch (error) {
      console.error("Error updating ad preferences:", error);
      res.status(500).json({ message: "Failed to update preferences" });
    }
  });
  app2.get("/favicon.ico", (req, res) => {
    res.setHeader("Content-Type", "image/x-icon");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.sendFile("favicon.ico", { root: "./client/public" });
  });
  app2.get("/api/maintenance/status", async (req, res) => {
    res.json({
      status: "operational",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      uptime: process.uptime()
    });
  });
  const httpServer = createServer(app2);
  const wss = new WebSocketServer({ server: httpServer, path: "/ws" });
  wss.on("connection", (ws2, req) => {
    console.log("New WebSocket connection");
    ws2.on("message", async (message) => {
      try {
        const data = JSON.parse(message);
        switch (data.type) {
          case "join_action":
            ws2.action_id = data.actionId;
            ws2.user_id = data.userId;
            wss.clients.forEach((client2) => {
              if (client2 !== ws2 && client2.readyState === WebSocket.OPEN && client2.action_id === data.actionId) {
                client2.send(JSON.stringify({
                  type: "viewer_joined",
                  actionId: data.actionId,
                  userId: data.userId
                }));
              }
            });
            break;
          case "leave_action":
            wss.clients.forEach((client2) => {
              if (client2 !== ws2 && client2.readyState === WebSocket.OPEN && client2.action_id === data.actionId) {
                client2.send(JSON.stringify({
                  type: "viewer_left",
                  actionId: data.actionId,
                  userId: data.userId
                }));
              }
            });
            break;
          case "action_chat":
            wss.clients.forEach((client2) => {
              if (client2.readyState === WebSocket.OPEN && client2.action_id === data.actionId) {
                client2.send(JSON.stringify({
                  type: "action_chat",
                  actionId: data.actionId,
                  message: data.message,
                  userId: data.userId,
                  userName: data.userName,
                  timestamp: (/* @__PURE__ */ new Date()).toISOString()
                }));
              }
            });
            break;
          case "action_ended":
            wss.clients.forEach((client2) => {
              if (client2.readyState === WebSocket.OPEN && client2.action_id === data.actionId) {
                client2.send(JSON.stringify({
                  type: "action_ended",
                  actionId: data.actionId
                }));
              }
            });
            break;
          case "join-call-signaling":
            ws2.user_id = data.userId;
            break;
          case "video-call-invite":
            const { callId, invitedUsers } = data;
            wss.clients.forEach((client2) => {
              if (client2.readyState === WebSocket.OPEN && invitedUsers.includes(client2.user_id)) {
                client2.send(JSON.stringify({
                  type: "call-invite",
                  callId,
                  from: data.userId
                }));
              }
            });
            break;
          case "video-call-response":
            wss.clients.forEach((client2) => {
              if (client2.readyState === WebSocket.OPEN && client2.call_id === data.callId) {
                client2.send(JSON.stringify({
                  type: "call-response",
                  callId: data.callId,
                  userId: data.userId,
                  response: data.response
                  // 'accept' or 'decline'
                }));
              }
            });
            break;
          case "webrtc-signal":
            wss.clients.forEach((client2) => {
              if (client2.readyState === WebSocket.OPEN && client2.call_id === data.callId && client2.user_id === data.targetUserId) {
                client2.send(JSON.stringify({
                  type: "webrtc-signal",
                  callId: data.callId,
                  from: data.fromUserId,
                  signal: data.signal
                }));
              }
            });
            break;
          case "audio-toggle":
          case "video-toggle":
            wss.clients.forEach((client2) => {
              if (client2.readyState === WebSocket.OPEN && client2.call_id === data.callId) {
                client2.send(JSON.stringify({
                  type: data.type,
                  callId: data.callId,
                  userId: data.userId || ws2.user_id,
                  enabled: data.enabled
                }));
              }
            });
            break;
        }
      } catch (error) {
        console.error("WebSocket message error:", error);
      }
    });
    ws2.on("close", () => {
      console.log("WebSocket connection closed");
      if (ws2.action_id && ws2.user_id) {
        wss.clients.forEach((client2) => {
          if (client2.readyState === WebSocket.OPEN && client2.action_id === ws2.action_id) {
            client2.send(JSON.stringify({
              type: "viewer_left",
              actionId: ws2.action_id,
              userId: ws2.user_id
            }));
          }
        });
      }
    });
  });
  app2.get("/api/maintenance/metrics", isAuthenticated, async (req, res) => {
    try {
      const metrics = await maintenanceService.getMetrics();
      res.json(metrics);
    } catch (error) {
      console.error("Error fetching maintenance metrics:", error);
      res.status(500).json({ message: "Failed to fetch maintenance metrics" });
    }
  });
  app2.get("/api/maintenance/health", isAuthenticated, async (req, res) => {
    try {
      const healthStatus = maintenanceService.getHealthStatus();
      res.json(healthStatus);
    } catch (error) {
      console.error("Error fetching health status:", error);
      res.status(500).json({ message: "Failed to fetch health status" });
    }
  });
  app2.post("/api/maintenance/cleanup/manual", isAuthenticated, async (req, res) => {
    try {
      await maintenanceService.performDailyMaintenance();
      res.json({ message: "Manual cleanup completed successfully" });
    } catch (error) {
      console.error("Error performing manual cleanup:", error);
      res.status(500).json({ message: "Failed to perform manual cleanup" });
    }
  });
  app2.get("/api/social/accounts", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const credentials = await storage.getSocialCredentials(userId);
      const accounts = credentials.map((cred) => ({
        id: cred.id,
        platform: cred.platform,
        username: cred.platformUsername,
        isActive: cred.isActive,
        lastSyncAt: cred.lastSyncAt,
        createdAt: cred.createdAt
      }));
      res.json(accounts);
    } catch (error) {
      console.error("Error fetching social accounts:", error);
      res.status(500).json({ message: "Failed to fetch social accounts" });
    }
  });
  app2.get("/api/oauth/authorize/:platform", isAuthenticated, async (req, res) => {
    try {
      const { platform } = req.params;
      const userId = req.user.claims.sub;
      const state = `${userId}:${platform}:${Math.random().toString(36).substr(2, 9)}`;
      req.session.oauthState = state;
      const hasRealCredentials = platform === "twitch" && process.env.TWITCH_CLIENT_ID || platform === "discord" && process.env.DISCORD_CLIENT_ID;
      if (!hasRealCredentials) {
        console.log(`Demo mode: Simulating ${platform} OAuth connection for user ${userId}`);
        await storage.createSocialCredential({
          userId,
          platform,
          platformUserId: `demo-${platform}-user-${Math.random().toString(36).substr(2, 6)}`,
          platformUsername: `demo_${platform}_user`,
          encryptedAccessToken: encryptForStorage("demo-access-token"),
          encryptedRefreshToken: encryptForStorage("demo-refresh-token"),
          tokenExpiresAt: new Date(Date.now() + 36e5),
          // 1 hour from now
          scopes: [],
          isActive: true,
          lastSyncAt: /* @__PURE__ */ new Date()
        });
        return res.json({
          authUrl: `/settings?social=connected&platform=${platform}&demo=true`,
          demo: true,
          message: `Demo connection to ${platform} created successfully`
        });
      }
      const authUrl = oauthService.generateAuthUrl(platform, userId);
      res.json({ authUrl });
    } catch (error) {
      console.error(`Error starting OAuth for ${req.params.platform}:`, error);
      res.status(500).json({ message: "Failed to start OAuth flow" });
    }
  });
  app2.get("/api/oauth/callback/:platform", async (req, res) => {
    try {
      const { platform } = req.params;
      const { code, state } = req.query;
      const sessionState = req.session?.oauthState;
      if (!sessionState || sessionState !== state) {
        return res.status(400).json({ message: "Invalid state parameter" });
      }
      const [userId] = state.split(":");
      const result = await oauthService.handleOAuthCallback(platform, code, state);
      delete req.session.oauthState;
      if (result.success) {
        res.redirect("/settings?social=connected");
      } else {
        res.redirect(`/settings?social=error&message=${encodeURIComponent(result.error || "OAuth failed")}`);
      }
    } catch (error) {
      console.error(`Error in OAuth callback for ${req.params.platform}:`, error);
      res.redirect("/settings?social=error&message=callback_error");
    }
  });
  app2.delete("/api/social/accounts/:accountId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { accountId } = req.params;
      const credentials = await storage.getSocialCredentials(userId);
      const credential = credentials.find((c) => c.id === accountId);
      if (!credential) {
        return res.status(404).json({ message: "Account not found" });
      }
      await storage.deleteSocialCredential(accountId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error removing social account:", error);
      res.status(500).json({ message: "Failed to remove social account" });
    }
  });
  app2.get("/api/social/posts", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const posts2 = await storage.getExternalPosts(userId);
      res.json(posts2);
    } catch (error) {
      console.error("Error fetching external posts:", error);
      res.status(500).json({ message: "Failed to fetch external posts" });
    }
  });
  app2.post("/api/social/sync/:platform", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { platform } = req.params;
      const credential = await storage.getSocialCredential(userId, platform);
      if (!credential || !credential.isActive) {
        return res.status(404).json({ message: "Platform not connected" });
      }
      const accessToken = decryptFromStorage(credential.encryptedAccessToken);
      res.json({ message: `Sync initiated for ${platform}`, success: true });
    } catch (error) {
      console.error(`Error syncing ${req.params.platform}:`, error);
      res.status(500).json({ message: "Failed to sync platform" });
    }
  });
  return httpServer;
}

// server/birthdayService.ts
var birthdayMessages2 = [
  "Hope you have the best day ever! \u{1F389}",
  "Wishing you all the happiness on your special day! \u{1F382}",
  "May all your birthday wishes come true! \u2728",
  "Hope your birthday is as amazing as you are! \u{1F31F}",
  "Sending you lots of birthday love! \u2764\uFE0F",
  "Have a fantastic birthday celebration! \u{1F38A}",
  "May this new year of life bring you joy! \u{1F388}",
  "Hope your special day is filled with happiness! \u{1F60A}",
  "Wishing you the best birthday ever! \u{1F381}",
  "May your birthday be magical! \u2728\u{1F382}"
];
async function sendAutomaticBirthdayMessages() {
  try {
    console.log("Checking for birthday users...");
    const birthdayUsers = await storage.getUsersWithBirthdayToday();
    if (birthdayUsers.length === 0) {
      console.log("No birthdays today");
      return;
    }
    console.log(`Found ${birthdayUsers.length} birthday user(s)`);
    const allUsers = await storage.getAllUsers();
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    for (const birthdayUser of birthdayUsers) {
      console.log(`Processing birthday messages for ${birthdayUser.firstName}`);
      const existingMessages = await storage.getBirthdayMessagesSentThisYear(birthdayUser.id, currentYear);
      const senderIds = new Set(existingMessages.map((msg) => msg.senderUserId));
      const sendersToProcess = allUsers.filter(
        (user) => user.id !== birthdayUser.id && // Don't send to self
        !senderIds.has(user.id)
        // Haven't sent message this year
      );
      console.log(`${sendersToProcess.length} kliq members need to send birthday messages`);
      for (const sender of sendersToProcess) {
        try {
          const randomMessage = birthdayMessages2[Math.floor(Math.random() * birthdayMessages2.length)];
          const post = await storage.createPost({
            userId: sender.id,
            content: `\u{1F389} Happy Birthday ${birthdayUser.firstName}! ${randomMessage}`
          });
          await storage.createBirthdayMessage({
            birthdayUserId: birthdayUser.id,
            senderUserId: sender.id,
            message: randomMessage,
            year: currentYear,
            postId: post.id
          });
          console.log(`Sent birthday message from ${sender.firstName} to ${birthdayUser.firstName}`);
        } catch (error) {
          console.error(`Failed to send birthday message from ${sender.firstName} to ${birthdayUser.firstName}:`, error);
        }
      }
    }
  } catch (error) {
    console.error("Error in automatic birthday message service:", error);
  }
}
async function runCleanupTasks() {
  try {
    console.log("Running cleanup tasks...");
    await Promise.all([
      sendAutomaticBirthdayMessages(),
      storage.deleteExpiredStories(),
      storage.cleanUpExpiredPolls(),
      storage.cleanUpExpiredEvents()
    ]);
    console.log("Cleanup tasks completed");
  } catch (error) {
    console.error("Error in cleanup service:", error);
  }
}
function startBirthdayService() {
  console.log("Starting birthday and cleanup service...");
  setTimeout(() => {
    runCleanupTasks();
  }, 5e3);
  setInterval(runCleanupTasks, 36e5);
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json({ limit: "10mb" }));
app.use(express2.urlencoded({ extended: false, limit: "10mb" }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
    startBirthdayService();
    const gracefulShutdown = (signal) => {
      log(`Received ${signal}, shutting down gracefully`);
      server.close(() => {
        log("HTTP server closed");
        const { pool: pool2 } = (init_db(), __toCommonJS(db_exports));
        pool2.end(() => {
          log("Database pool closed");
          process.exit(0);
        });
      });
    };
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  });
})();
