import '../styles/style2.css'
const Partners = () => {
  return(
        <section className="partners-section">
          <div className="container">
            <h2 className="section-title">Nos Partenaires</h2>
            <div className="partners-grid">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="partner-logo">
                  <div className="partner-placeholder">
                    <span>Partenaire {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Partners