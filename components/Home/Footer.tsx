// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-200 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul>
              <li><a href="#" className="hover:underline">Help & FAQs</a></li>
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">Order Status</a></li>
              <li><a href="#" className="hover:underline">Payment Options</a></li>
            </ul>
          </div>
  
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press Releases</a></li>
              <li><a href="#" className="hover:underline">Affiliate Program</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CodeScape. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  