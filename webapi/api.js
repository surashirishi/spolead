const foundation = 'http://localhost:3000/v1'

export default {
  // ユーザーログイン
  login: {
    url: foundation + '/login',
    method: 'post'
  },
  // チーム一覧
  teamIndex: {
    url: foundation + '/teams',
    method: 'get'
  },
  // チーム作成
  teamCreate: {
    url: foundation + '/teams',
    method: 'post'
  }
}
