# IP Tracker App

https://ip-address-tracker-ai3.pages.dev

Welcome to the IP Tracker App! This application allows users to track the geographical location of a given IP address. Built using vanilla JavaScript and styled with Tailwind CSS, it follows the Model-View-Controller (MVC) architecture to ensure clean and maintainable code.

## Features

- **IP Address Input**: Users can enter an IP address to track its location.
- **Geographical Information**: Displays the country, region, city, latitude, and longitude of the IP address.
- **Map Integration**: Visualizes the location on an interactive map.
- **Responsive Design**: Ensures a seamless experience across various devices using Tailwind CSS.

## Technologies Used

- **JavaScript**: Core functionality and logic.
- **Tailwind CSS**: Styling and layout.
- **API**: Used to fetch geographical data for IP addresses.

## Getting Started

### Prerequisites

To run this project, you need a modern web browser and an internet connection.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/IliaAhd/IP-Address-Tracker.git
    ```
2. Navigate to the project directory:
    ```sh
    cd IP-Address-Tracker
    ```
3. Use `npm run dev` in your terminal:
    ```sh
    npm run dev
    ```

### Usage

1. Open the app in your web browser.
2. Enter the IP address you want to track in the input field.
3. Click the "Track" button.
4. View the geographical information and map displaying the IP location.

## Project Structure

```structure
IP-Address-Tracker/
├── src/
    ├── images/
    ├── css/          # TailwindCss file
    ├── js/           # JavaScript files in MVC structure
    |   ├── model.js
    |   ├── view.js
    |   └── controller.js           
├── index.html        # Main HTML file
└── README.md         # Project README file
```

## Customization

### Tailwind CSS

The styling is done using Tailwind CSS. To customize the styles:

1. Modify the Tailwind classes as needed.

### JavaScript

The core logic is implemented following the MVC architecture:

- Model: Open `./src/js/model.js` to update the data fetching logic.
- View: Open `./src/js/view.js` to modify the presentation logic.
- Controller: Open `./src/js/controller.js` to update the application logic.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or submit an issue.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [IPfy API](https://api.ipify.org/?format=json/)
- [IP API](https://ip-api.com/)

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: iliya.ahadi@gmail.com
- **GitHub**: [IliaAhd](https://github.com/IliaAhd)

---

Thank you for using the IP Tracker App! Happy tracking!