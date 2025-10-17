# Restaurant Admin Panel Guide

## Overview

This admin panel is built with Sanity Studio and provides a complete content management system for your restaurant website. All content management is done through an intuitive web interface.

## Getting Started

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `/studio` (e.g., `http://localhost:3000/studio`)

3. You'll be prompted to log in or create an account for Sanity Studio

## Content Sections

### 🏠 Site Configuration

#### Site Settings

- **Location**: Site Configuration → Site Settings
- **Purpose**: Manage global restaurant settings
- **Fields**:
  - Restaurant Logo (image upload)
  - Logo Text (alternative text for SEO)
  - Hero Section Background Image

#### Translation Management

- **Location**: Site Configuration → Translation Files
- **Purpose**: Upload and manage translation JSON files
- **How to use**:
  1. Click "Create new" to add a translation file
  2. Select language (English/Japanese)
  3. Paste the complete JSON content in the text area
  4. Mark as "Active Translation File" if this should be the current translation
  5. Only one file per language should be active at a time

#### General Translations (Legacy)

- **Location**: Site Configuration → General Translations
- **Note**: This is the older translation system. Use Translation Files for new translations.

### 🍽️ Content Management

#### Menu Items & Specials

- **Location**: Content Management → Menu Items & Specials
- **Purpose**: Manage your restaurant's menu
- **Features**:
  - Multi-language support (English/Japanese)
  - Image upload with hotspot editing
  - Price management
  - Special item flagging
  - Category organization (Appetizer, Main Course, Dessert, Beverage)

#### Customer Testimonials

- **Location**: Content Management → Customer Testimonials
- **Purpose**: Manage customer reviews and testimonials
- **Fields**:
  - Customer name
  - Review text
  - Rating (1-5 stars)
  - Background image (for testimonial display)
  - Customer photo (optional)

### 📋 Operations

#### All Reservations

- **Location**: Operations → Reservations
- **Purpose**: View and manage all reservations
- **Features**:
  - Sorted by date (newest first)
  - Complete customer information
  - Special requests/notes

#### Pending Reservations

- **Location**: Operations → Pending Reservations
- **Purpose**: Focus on reservations requiring attention
- **Features**:
  - Shows only pending reservations
  - Sorted by date (earliest first)
  - Quick status updates

## Status Management

Reservations have four status levels:

- **📝 Pending** (Default): New reservation awaiting confirmation
- **✅ Confirmed**: Reservation confirmed with customer
- **🧑‍🤝‍🧑 Checked In**: Customer has arrived
- **❌ Cancelled**: Reservation cancelled

## Translation Workflow

### For General Text (Navigation, Headers, etc.)

1. Copy the current JSON file from `lib/i18n/[language].json`
2. Make your text changes
3. Go to Translation Management in the admin
4. Create/update the translation file
5. Mark as active

### For Menu Items

- Menu items have built-in translation fields
- Edit the item directly in the admin
- Name and description fields support multiple languages

## Best Practices

1. **Single Active Translation**: Only mark one translation file as active per language
2. **Regular Backups**: Export your content regularly
3. **Image Optimization**: Use the hotspot feature for important image areas
4. **Consistent Categories**: Use the predefined categories for menu items
5. **Status Updates**: Keep reservation statuses current for better organization

## Troubleshooting

### Translation Files Not Updating

- Ensure only one file per language is marked as active
- Check that the JSON is valid (no syntax errors)
- Verify the file has been published in Sanity

### Images Not Displaying

- Check that images are published in Sanity
- Verify image URLs are accessible
- Use the hotspot feature for better image cropping

### Reservations Not Appearing

- Check that you're looking in the correct section (All vs Pending)
- Verify the reservation has been published
- Check filters if using custom views

## Support

For technical issues or questions about content management, refer to the Sanity Studio documentation at https://www.sanity.io/docs
