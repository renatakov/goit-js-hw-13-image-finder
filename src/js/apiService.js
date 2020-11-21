export default {
  baseUrl: `https://pixabay.com/api/`,
  imageType: `photo`,
  orientation: `horizontal`,
  _page: 1,
  per_page: 3,
  apiKey: `18650828-2cd427c2862082afea365d547`,



  getImages(query) {
    let params =  `?image_type=${this.imageType}&orientation=${this.orientation}&q=${query}&page=${this._page}&per_page=${this.per_page}&key=${this.apiKey}`;
    let url = `${this.baseUrl}${params}`
    return fetch(url)
    .then(response => response.json())
  },
  setPage() {
    // this._page += 1
    // console.log(this._page)
    // return this._page
  }
}