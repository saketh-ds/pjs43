// components/Certifications.jsx
export default function Certifications() {
  const publications = [
    {
      title:
        "Optimizing Healthcare Delivery with Seamless Integration of Clinical Decision Support and EHR Systems",
      venue: "AIP Conference Proceedings, 2025",
      doi: "https://doi.org/10.1063/5.0255988",
      summary:
        "Healthcare organizations aim to improve efficiency and outcomes by integrating CDS with EHR systems. Benefits include improved coordination; challenges include cost and training.",
    },
    {
      title: "Virtual Persona in E-commerce and its Engagement with Customers in XR",
      venue: "AIP Conference Proceedings, 2025",
      doi: "https://doi.org/10.1063/5.0254757",
      summary:
        "A Virtual Persona is a digital representation of customers in e-commerce. It improves engagement but introduces privacy and technical challenges.",
      
    },
    {
      title: "AI Intergration In Combat Vechicles",
      venue: "",
      doi: "https://docs.google.com/document/d/1vw8uy1aHhxFpbe2nQn8dgk7DOQeLLLEoHti62nPMYp4/edit?usp=sharing",
      summary:
      "The system combines Raspberry Pi, Arduino, advanced sensors, and image processing to achieve precise intruder detection and real-time tracking. This integrated setup offers higher accuracy, automation, and efficiency than traditional security systems."
    },
    {
      title: " Revolutionizing Transportation Insights using GCP Services in Uber's Data Analytics",
      venue: "",
      doi: "https://docs.google.com/document/d/17ZysFlLi6YkHahSl6qNx77PiAyohtXBai_mJ5dghdC0/edit?usp=sharing",
      summary:
      "This project builds a secure, scalable GCP pipeline where the “NYC 2023” dataset is cleaned with Mage, stored in BigQuery, and analyzed using SQL and Looker dashboards. It enhances Uber’s data-driven decision-making by streamlining data management, transformation, and visualization."
    },
    {
      title: "SENTIMENT ANALYSIS OF TWEETS: A COMAPARATIVE STUDY BETWEEN VARIOUS ML ALGORITHMS AND ENSEMBLED ALGORITHM",
      venue: "",
      doi: "https://docs.google.com/document/d/1C6KnDKloEwcCKvehrGhB2jk818b4xNwbTBAdQ62y4ZA/edit?usp=sharing",
      summary:"This paper collects real-time Twitter data and applies multiple Machine Learning models to perform and compare sentiment analysis accuracy. It highlights how automated sentiment interpretation supports decision-making in a world driven by user-generated content."
    },
  ];

  const certifications = [
    {
      title: "MICROSOFT CERTIFIED: AI-900",
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/3949ee5b-bbb3-4186-be34-8b3e9d1c8511/public_url",
    },
    {
      title: "MICROSOFT CERTIFIED: AZ-900",
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/03396b03-5398-469d-a324-5f81e7028348/public_url",
    },
    {
      title: "SQL AI Developer Associate",
      issuer: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/PAKALASIVASUBRAMANIYAMSAKETH-6044/A7C617BDE32E1F1F?sharingId=4DF8451DC7565730",
    },
    {
      title: "HackerRank — SQL (Advanced)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/e55453db813c",
    },
    {
      title: "Verzeo Internship — Python & Data Science",
      issuer: "Verzeo",
      link: "https://drive.google.com/file/d/1tKty8KS2aKE-5ixD3rGl4gLFYfJVSV5a/view?usp=sharing",
    },
    {
      title: "Machine Learning for Data Science using Python",
      issuer: "NIT",
      link: "https://drive.google.com/file/d/1nf5vC5wo-lVqh8rYtVxVk73TPKZ59-9_/view?usp=sharing",
    },
    {
      title: "Data Science Course",
      issuer: "GUVI",
      link: "https://www.guvi.in/",
    },
    {
      title: "Build the Metaverse",
      issuer: "Munjal Birmingham City University",
      link: "https://drive.google.com/file/d/1wRMAdoiByJ6d2aQ4k4SscdS7s8CceMQu/view?usp=sharing",
    },
    {
      title: "AWS Academy Graduate-cloud",
      issuer: "Amazon Web Services Training and Certification",
      link: "https://www.credly.com/badges/725311c6-8b0c-494f-9077-c53d1a09c173/public_url",
    },
    {
      title: "AWS Academy Graduate - Machine Learning ",
      issuer: "Amazon Web Services Training and Certification",
      link: "https://www.credly.com/badges/d971afd1-0338-43f4-bf5c-8984957d19d5/public_url",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-transparent text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <p className="uppercase text-gray-300 tracking-widest text-sm mb-2">
          Showcasing my skills, knowledge, and achievements.
        </p>
        <h2 className="text-4xl font-extrabold mb-10">
          PUBLICATIONS & CERTIFICATIONS
        </h2>

        {/* Publications */}
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">
          Publications
        </h3>

        <div className="space-y-6 mb-14">
          {publications.map((p, i) => (
            <div
              key={i}
              className="
                bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg
                transition-all duration-300
                hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
              "
            >
              <p className="text-sm text-gray-300 mb-1">{p.venue}</p>
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>

              {p.doi && (
                <p className="text-blue-400 text-sm mb-3">
                  DOI:{" "}
                  <a
                    href={p.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {p.doi}
                  </a>
                </p>
              )}

              <p className="text-gray-300">{p.summary}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">
          Certifications
        </h3>

        <div className="space-y-6">
          {certifications.map((c, i) => (
            <div
              key={i}
              onClick={() => c.link && window.open(c.link, "_blank")}
              className="
                bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg
                transition-all duration-300 cursor-pointer
                hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                active:scale-[0.98]
              "
            >
              <h4 className="text-xl font-semibold mb-2">{c.title}</h4>
              <p className="text-gray-300">{c.issuer}</p>

              {c.link && (
                <p className="text-blue-400 text-sm mt-2 underline">
                  Click to view certificate →
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
