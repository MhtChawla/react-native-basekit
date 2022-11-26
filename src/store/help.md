# MST (implementation)

1. install mobx & mobx state lite
2. create a file of store.js & declare 

```sh
const UserModel = types
 .model('User', {
    firstName: types.string,
  })
 .actions(self => ({
    afterCreate() {
      console.log("I'm called as useEffect");          // if needed
    },                                                      
    setFirstName(value) {
      self.firstName = value;
    },
  }))
  .views(self=>({
    get fullName(){
        return store.firstName + '' + store.lastName
    }
  }))

const user = UserModel.create({
    firstName:'',
})

export default user;
```

3. wrap your whole App.js with observer like following (without this, actions like setFirstName('') won't be executed)
```sh
import {observer} from "mobx-react-lite"
...
export default observer(App)
```
# --------------------------------------------------------------------------------