import { Bell, ChevronRight, Shield, BookOpen, FileText, Video, MessageCircle, AlertTriangle, Menu, Headphones, Play, Calendar } from "lucide-react";
import '../styles/style2.css'
const Categories = () => {
    // Categories for the thematic section
      const categories = [
        { name: "Désinformation", icon: <FileText size={24} />, color: "blue" },
        { name: "Piratage", icon: <Shield size={24} />, color: "red" },
        { name: "Arnaques Financières", icon: <Bell size={24} />, color: "yellow" },
        { name: "Vol de Données", icon: <AlertTriangle size={24} />, color: "purple" },
        { name: "Harcèlement en Ligne", icon: <MessageCircle size={24} />, color: "green" },
        { name: "Formation", icon: <BookOpen size={24} />, color: "orange" },
      ];

    return(
       <section className="categories-section">
          <div className="container">
            <h2 className="section-title">Explorez par Thématique</h2>
            <div className="categories-grid">
              {categories.map((category, index) => (
                <p key={index} className={`category-card color-${category.color}`}>
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.name}</h3>
                </p>
              ))}
            </div>
          </div>
        </section>

        )
}

export default Categories