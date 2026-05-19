# Elite Footwear - Shoe Store Frontend

A modern, responsive frontend for a premium shoe store built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Catalog**: Browse 9 different shoe products across 3 categories
- **Category Filtering**: Filter products by Running, Casual, or Formal categories
- **Shopping Cart**: Add items to cart with quantity management
- **Interactive UI**: Smooth animations and transitions
- **Contact Form**: Get in touch with the store
- **Modern Styling**: Gradient backgrounds and clean design

## Product Categories

1. **Running Shoes**: High-performance athletic footwear
2. **Casual Shoes**: Comfortable everyday sneakers
3. **Formal Shoes**: Elegant dress shoes for special occasions

## How to Run

Simply open `index.html` in any modern web browser. No build process or dependencies required!

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## Features Breakdown

### Navigation
- Sticky header with smooth scrolling
- Quick access to all sections
- Shopping cart icon with item count

### Product Display
- Grid layout with responsive columns
- Product cards with hover effects
- Category badges and pricing
- Add to cart functionality

### Shopping Cart
- Modal popup for cart view
- Quantity tracking
- Total price calculation
- Remove items functionality

### About Section
- Company information
- Feature highlights (Quality, Free Shipping, Easy Returns)
- Professional layout

### Contact Section
- Contact information
- Working contact form
- Social media links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: Interactive functionality
- **No frameworks**: Pure vanilla JavaScript for simplicity

## File Structure

```
shoe-store/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

### Adding New Products

Edit the `products` array in `script.js`:

```javascript
{
    id: 10,
    name: "Your Shoe Name",
    category: "running", // or "casual" or "formal"
    price: 99.99,
    description: "Your description",
    emoji: "👟"
}
```

### Changing Colors

Update the gradient colors in `styles.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modifying Layout

The site uses CSS Grid and Flexbox for layout. Adjust breakpoints in the media queries section of `styles.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration for real checkout
- User authentication
- Product reviews and ratings
- Wishlist functionality
- Size selection
- Color variants
- Search functionality
- Order history

## License

MIT License - Feel free to use this project for learning or commercial purposes.

## Credits

Created for KAN-1 Jira task - "Create a frontend for a shoe store"
Built with ❤️ using modern web technologies