
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
    const softSkills = document.getElementById('profile.skills.softskills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardskills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const lang = document.getElementById('profile.languages')

    lang.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateProjects(profileData) {
    const project = document.getElementById('profile.portfolio')

    project.innerHTML = profileData.portfolio.map(project => 
    `<li>
    <span class="title github">${project.name}</span>
    <p class="descricao">${project.description}</p>
    <a href="${project.url}" target="_blank">github.com/lucasfbb/${project.caminho}</a>
    </li>`).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.professionalExperience')

    experience.innerHTML = profileData.professionalExperience.map(experience => 
    `<li>
    <span class="title">${experience.name}</span>
    <span class="subtitle">${experience.period}</span>
    <p class="paragrafo">${experience.description}</p>
    </li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjects(profileData)
    updateExperience(profileData)
})()