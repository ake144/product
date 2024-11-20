import { Facebook, Twitter, LinkedinIcon as LinkedIn,} from "lucide-react"

const Footer= () => {
    return(
        <footer className="relative z-10 bg-black/80 backdrop-blur-sm text-white py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
            <div>
              <p className="mb-2">Need help? contact@example.com</p>
              <p className="text-sm text-gray-400">Privacy Policy | Terms of Service | Contact</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
              <LinkedIn className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </div>
          </div>
        </footer>
    )

}


export default Footer