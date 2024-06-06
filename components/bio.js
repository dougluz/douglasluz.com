const bioInfo = [
  {
    date: "Oct 1997",
    description: "Born"
  },
  {
    date: "Jan 2015",
    description: "Joined Information Systems BA"
  },
  {
    date: "Jan 2015",
    description: "Started working at intern at Rio Negro city hall"
  },
  {
    date: "Sep 2015",
    description: "Working as an intern on SESI"
  },
  {
    date: "Oct 2017",
    description: "Joined as intern in Tranorte Sistemas Mecanizados"
  },
  {
    date: "May 2018",
    description: "Promoted to IT Assistant at Tranorte Sistemas Mecanizados"
  },
  {
    date: "Feb 2018",
    description: "Graduated with an Information Systems BA"
  },
  {
    date: "Nov 2020",
    description: "Joined ZRP as full-stack developer"
  },
  {
    date: "Jul 2023",
    description: "Joined RD Station as Software Engineer"
  }
]

export const Bio = () => (
  <section>
    <h2>Bio</h2>
    <div>
      {bioInfo.map(({ date, description }, index) => (
        <div
          className="flex w-full align-center justify-start gap-2"
          key={index}
        >
          <p className="text-md min-w-20 md:min-w-20 font-bold">{date}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </section>
)
