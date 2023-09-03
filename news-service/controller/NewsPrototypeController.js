const { NewsModel } = require('../model/NewsModel');
const { NewsRepository } = require('../repository/NewsRepository');
const { ControllerBase } = require('../utils/ControllerBase');
const fs = require('fs');
class NewsPrototypeController extends ControllerBase {
  constructor() {
    super();
    this.repository = new NewsRepository();
  }

  async getAllNews(req, res) {
    try {
      const result = [
        {
          _id: '64f0e0ae71793dc3e7d23d46',
          title: 'New Travel Plan Available',
          content: `<p><strong>Experience the Magic of Japan - Unforgettable Travel Package</strong>&nbsp;</p>
            <p>Are you ready for an adventure that will transport you to a world of ancient traditions, breathtaking landscapes, and modern wonders? Look no further than our exclusive travel package to the Land of the Rising Sun &ndash; Japan!</p>
            <p><strong>Discover Japan's Wonders:</strong></p>
            <ol>
            <li><strong>Historic Kyoto:</strong> Immerse yourself in the elegance of Kyoto, where ancient temples, traditional tea ceremonies, and mesmerizing geisha culture await.</li>
            <li><strong>Tokyo Metropolis:</strong> Explore the vibrant heart of Japan, Tokyo! From the futuristic skyline of Shinjuku to the tranquil gardens of Meiji Shrine, Tokyo offers a blend of modern and traditional experiences.</li>
            <li><strong>Savor Japanese Cuisine:</strong> Indulge in the world-renowned flavors of Japan, from fresh sushi at Tsukiji Fish Market to delicious ramen in cozy noodle shops.</li>
            </ol>
            <p>&nbsp;</p>
            <p><strong>Why Choose Our Travel Package:</strong></p>
            <ul>
            <li>&nbsp;Hassle-free Booking: We take care of all the details, so you can focus on enjoying your journey.</li>
            <li>&nbsp;Expert Local Guides: Our knowledgeable guides ensure you don't miss any hidden gems.</li>
            <li>&nbsp;Unique Experiences: We curate experiences that immerse you in Japan's rich culture.</li>
            <li>&nbsp;Safe &amp; Secure: Your safety and comfort are our top priorities.</li>
            </ul>
            <p><strong>Book Your Japan Adventure Today!</strong></p>
            <p>Don't miss out on this once-in-a-lifetime opportunity to explore Japan. Whether you're a history enthusiast, a foodie, a nature lover, or simply seeking new horizons, Japan has something extraordinary to offer.</p>
            <p><strong>Contact Us</strong>: Call now at [Your Contact Number] or email us at [Your Email Address] to book your travel package and receive special discounts for early bookings.</p>
            <p>Join us on this unforgettable journey to Japan, where tradition meets innovation, and every moment is a memory waiting to be made.</p>
            <p>&nbsp;</p>`,
          img: {
            destination: 'public/demofiles',
            filename: 'promotion',
            mimetype: 'image/jpg',
          },
        },
        {
          _id: '64f0e0ae71793dc3e7d23d45',
          title: 'Malaysia Famous Location',
          content: `<p><strong>Welcome to Malaysia - Where Diversity Meets Paradise!</strong>&nbsp;</p>
          <p>Nestled in the heart of Southeast Asia, Malaysia is a land of enchanting contrasts, a tapestry of cultures, and a treasure trove of natural wonders. From bustling cities to pristine rainforests, and historic heritage sites to pristine beaches, Malaysia offers a diverse range of experiences that will leave you awe-inspired.</p>
          <p><strong>Discover the Magic of Malaysia:</strong></p>
          <ul>
          <li><strong>Kuala Lumpur - The Modern Marvel:</strong> Begin your journey in the dazzling capital city, Kuala Lumpur. Towering skyscrapers like the iconic Petronas Twin Towers dominate the skyline, while vibrant street markets and sumptuous street food beckon at every corner. Don't forget to explore the Batu Caves, a stunning temple complex hidden within limestone caves.</li>
          <li><strong>Langkawi - Island Paradise:</strong> Escape to the enchanting Langkawi archipelago, known for its crystal-clear waters and lush green landscapes. Enjoy water sports, visit the Langkawi Wildlife Park, or simply relax on pristine beaches.</li>
          <li><strong>Taman Negara - Ancient Rainforest:</strong> Immerse yourself in the world's oldest rainforest, Taman Negara. Trek through lush jungles, cross canopy walkways, and spot diverse wildlife in this natural haven.</li>
          </ul>
          <p><strong>Contact Us:</strong> Call now at [Your Contact Number] or visit our website at [Your Website] to plan your Malaysian getaway and unlock exclusive travel offers.</p>
          <p>Embark on a journey to Malaysia, where you'll create memories that last a lifetime.</p>`,
          img: {
            destination: 'public/demofiles',
            filename: 'malaysia',
            mimetype: 'image/jpg',
          },
        },
      ];
      for (var i = 0; i < result.length; i++) {
        if (result[i].img?.filename) {
          const file = fs.readFileSync(
            `${result[i].img.destination}/${result[i].img.filename}`
          );
          result[i]['img'] = {
            mimetype: result[i].img.mimetype,
            file: Buffer.from(file).toString('base64'),
          };
        }
      }
      if (result) {
        const response = {
          data: result,
        };
        return res.status(200).send(response);
      }
    } catch (err) {
      this.loggerService.error(err);
      return res.status(500).send({ message: 'Fail to get news' });
    }
  }

  async getNews(req, res) {
    try {
      const { id } = req.params;
      const result = {
        _id: id,
        title: 'New Travel Plan Available',
        content: `<p><strong>Experience the Magic of Japan - Unforgettable Travel Package</strong>&nbsp;</p>
        <p>Are you ready for an adventure that will transport you to a world of ancient traditions, breathtaking landscapes, and modern wonders? Look no further than our exclusive travel package to the Land of the Rising Sun &ndash; Japan!</p>
        <p><strong>Discover Japan's Wonders:</strong></p>
        <ol>
        <li><strong>Historic Kyoto:</strong> Immerse yourself in the elegance of Kyoto, where ancient temples, traditional tea ceremonies, and mesmerizing geisha culture await.</li>
        <li><strong>Tokyo Metropolis:</strong> Explore the vibrant heart of Japan, Tokyo! From the futuristic skyline of Shinjuku to the tranquil gardens of Meiji Shrine, Tokyo offers a blend of modern and traditional experiences.</li>
        <li><strong>Savor Japanese Cuisine:</strong> Indulge in the world-renowned flavors of Japan, from fresh sushi at Tsukiji Fish Market to delicious ramen in cozy noodle shops.</li>
        </ol>
        <p>&nbsp;</p>
        <p><strong>Why Choose Our Travel Package:</strong></p>
        <ul>
        <li>&nbsp;Hassle-free Booking: We take care of all the details, so you can focus on enjoying your journey.</li>
        <li>&nbsp;Expert Local Guides: Our knowledgeable guides ensure you don't miss any hidden gems.</li>
        <li>&nbsp;Unique Experiences: We curate experiences that immerse you in Japan's rich culture.</li>
        <li>&nbsp;Safe &amp; Secure: Your safety and comfort are our top priorities.</li>
        </ul>
        <p><strong>Book Your Japan Adventure Today!</strong></p>
        <p>Don't miss out on this once-in-a-lifetime opportunity to explore Japan. Whether you're a history enthusiast, a foodie, a nature lover, or simply seeking new horizons, Japan has something extraordinary to offer.</p>
        <p><strong>Contact Us</strong>: Call now at [Your Contact Number] or email us at [Your Email Address] to book your travel package and receive special discounts for early bookings.</p>
        <p>Join us on this unforgettable journey to Japan, where tradition meets innovation, and every moment is a memory waiting to be made.</p>
        <p>&nbsp;</p>`,
        img: {
          destination: 'public/demofiles',
          filename: 'promotion',
          mimetype: 'image/jpg',
        },
      };
      if (result.img?.filename) {
        const file = fs.readFileSync(
          `${result.img.destination}/${result.img.filename}`
        );
        result['img'] = {
          mimetype: result.img.mimetype,
          file: Buffer.from(file).toString('base64'),
        };
      }
      const news = new NewsModel({ data: result });
      return res.status(200).send({ result: news });
    } catch (err) {
      this.loggerService.error(err);
      return res.status(500).send({ message: 'Fail to get news' });
    }
  }
}
module.exports = { NewsPrototypeController };
