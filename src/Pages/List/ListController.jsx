import { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

const ListController = () => {
  // stateler
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  // class'tan bir örnek oluşturduk
  const model = new ListModel();
  // useEffect ile kullanıcı etkileşimi izlediğimizden controller dosyaysında tanımlarız
  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  // kullanıcı etkileşimiyle tetiklenecek olan fonksiyon

  return (
    <ListView
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      posts={posts}
    />
  );
};

export default ListController;
