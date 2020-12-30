const twitchUsernameRequirementRegex = new RegExp(/^[a-zA-Z0-9_]{4,25}$/)

const isValidTwitchUsername = (username: string): boolean =>
  twitchUsernameRequirementRegex.test(username)

export default isValidTwitchUsername
