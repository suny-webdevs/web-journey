const getJobApplications = () => {
  const storedJobApplication = localStorage.getItem("job-applications")
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication)
  }
  return []
}

const saveJobApplications = (id) => {
  const storedJobApplications = getJobApplications()
  const isJobExists = storedJobApplications.find((jobId) => jobId === id)
  if (!isJobExists) {
    storedJobApplications.push(id)
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    )
  }
}

export { getJobApplications, saveJobApplications }
