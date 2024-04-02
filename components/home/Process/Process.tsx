import styles from './Process.module.css'

const Process = () => {
  const PhasesArray = [
    {id:1, bar:[1], className:styles.phase1 , phase: 'Phase 1', color: 'black', heading: 'CONSULTATION & BRIEFING', 
        content1: 'We start by asking a few simple but thought provoking questions. These are essential in creating a clear direction for your brand/design and understanding what you want to achieve. ',
        content2:' Once we have fleshed out a few ideas and completed research, we will establish a brief. This will act as our guidelines throughout the process. ', 
        content3:' This will in turn ensure we are always on track, resulting in greater efficiency and an overall quicker turnover.'},
    {id:2, bar:[1,2], className:styles.phase2 , phase: 'Phase 2', color: 'rgb(23,23,23)', heading: 'CONCEPTUALISATION & REFINEMENT', 
        content1:'The concept creation generally begins with sketching, this is where the magic happens! ', 
        content2:'These ideas are then digitised and discussed amongst the team. Once the best ideas are put forward, we will prepare to present to you. Your feedback is crucial for making necessary adjustments and refining the design to your taste.', 
        content3:'Depending on the project and package the number of reviews and feedback sessions may vary*.'},
    {id:3, bar:[1,2,3], className:styles.phase3 , phase: 'Phase 3', color: 'black', heading: 'FINALISATION & EXPORTATION', 
        content1:'Once we have your seal of approval, we will prepare all final files for export.', 
        content2:' Every aspect of your design, from resolution and measurements to the medium and colour format will be rigirously checked to ensure the highest and most consistent output of deliverable assets.', 
        content3:'This will ensure you have your print or digital assets ready without any headaches.'},
  ]

  return (
    <div className={`${styles.wrapper} default__padding--left default__padding--right`} id='process'>
      <div className={styles.processHeading}><h2>Our Process</h2></div>
      <div className={styles.process__shapes}>
        <div className={styles.process1} style={{backgroundColor: PhasesArray[0].color}}></div>
        <div className={styles.process2} style={{backgroundColor: PhasesArray[1].color}}></div>
        <div className={styles.process3} style={{backgroundColor: PhasesArray[2].color}}></div>
      </div>
      
      <div className={styles.phases__container}>
        {PhasesArray.map(phase=>(
        <div className={`${phase.className} ${styles.phase}`} key={phase.id} >
          <h3>{phase.phase}</h3>
          <h3>{phase.heading}</h3>
          <div className={styles.phase__bars}>
            {phase.bar.map(bar=>(
              <div key={bar} className={styles.phase__bar__individual}></div>
            ))}
          </div>
          <div className={styles.content}>
            <p>{phase.content1}</p><br/>
            <p>{phase.content2}</p><br/>
            <p>{phase.content3}</p><br/>
          </div>
        </div>))}
      </div>

    </div>
  )
}

export default Process