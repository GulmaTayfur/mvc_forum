import axios from "axios";

// veriyle alakalı her yapıyı modelde tanımlarız
// model oluştururken genelde classlaru tercih ederi

export default class ListModel {
  // api'dan post verilerini alıp döndüren fonksiyon
  async getPosts() {
    try {
      const res = await axios.get("http://localhost:3000/posts");

      return res.data;
    } catch (err) {
      alert("üzgünüz bir hata oluştu");
      console.log(err);
    }
  }
}
