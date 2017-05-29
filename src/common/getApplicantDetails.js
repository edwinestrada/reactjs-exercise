export default {
  getApplicantEmail: (applicant) => {
    if (applicant.email) return applicant.email;
    return `${applicant.name.toLowerCase().replace(/\s+/g, '.')}@nimble.com`;
  },
  getApplicantAvatar: (applicant) => {
    const firstLetter = applicant.name.slice(0,1).toLowerCase();
    return `https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_${firstLetter}_120.png`;
  }
}