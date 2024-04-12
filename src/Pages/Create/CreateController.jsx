import { v4 } from "uuid";
import CreateView from "./CreateView";
import CreateModel from "./CreateModel";
import { useNavigate } from "react-router-dom";

const CreateController = () => {
  // model'den bir örnek oluştur
  const model = new CreateModel();

  // navigate kurulumu yaptık
  const navigate = useNavigate();
  //form gönderilince çalışacak olan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // 1) inputlardaki verileri alıp post nesnesi oluştur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    // 2) post nesnesine id değeri ekle
    newPost.id = v4();

    // 3) api'ya veriyi kaydet ve anasayfaya yönlendir
    model.createPost(newPost).then(() => navigate("/"));
  };
  //contorller'lar sadece viwe bileşenini döndürür

  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
