
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const job = document.getElementById('profile.perfil')
    job.innerText= profileData.perfil

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const wpp = document.getElementById('profile.wpp')
    wpp.innerText = profileData.wpp
    wpp.href = `tel:${profileData.wpp}`

    const email = document.getElementById('profile.msg')
    email.innerText = profileData.msg
    email.href = `mailto:${profileData.msg}`

    const github = document.getElementById('profile.git')
    github.innerText = profileData.git

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()