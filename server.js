function newFolderName (names) {
  if (!names.includes('New Folder')) {
    return 'New Folder'
  } else {
    let i = 2
    while (names.includes(`New Folder (${i})`)) {
      i++
    }
    return `New Folder (${i})`
  }
}

console.log(newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)'])) // Expect New Folder (4)
console.log(newFolderName(['New Folder'])) // Expect New Folder (1)
console.log(newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)', 'New Folder (4)'])) // Expect New Folder (5)
console.log(newFolderName([])) // Expect New Folder

module.exports = { newFolderName }
