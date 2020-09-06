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
  // チーム詳細
  teamShow: {
    url: foundation + '/teams/:id',
    method: 'get'
  },
  // チーム作成
  teamCreate: {
    url: foundation + '/teams',
    method: 'post'
  },
  // チーム作成
  teamEdit: {
    url: foundation + '/teams/:id',
    method: 'patch'
  },
  // 口コミ作成（投稿）
  reviewCreate: {
    url: foundation + '/reviews',
    method: 'post'
  },
  // 口コミ一覧
  reviewIndex: {
    url: foundation + '/reviews',
    method: 'get'
  }
}
