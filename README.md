<div>
    <h1>JangTaeHee_pre-onboarding task</h1>
    <span>β λ§ν¬ : </span>
    <a display="block" href="https://jangtaehee-pre-onboarding-fe.netlify.app" >
      https://jangtaehee-pre-onboarding-fe.netlify.app
    </a>
</div>

<br /><br />

## Content

- π  [Built with](#built-with)
- π [Project](#project)

---

<br />

## Built with

### β Library

- `react-router-dom`
- `styled-components`
- `react-icons`

### β Deploy

- `netlify`

---

<br />

### β Project

<br />

> νλ‘μ νΈ μν€νμ²

  <details>
    <summary>μν€νμ²</summary>

- src

  - **components**
    - enter
      - Button.jsx
      - ErrorMessage.jsx
      - Input.jsx
      - LinkComp.jsx
      - Title.jsx
    - todo
      - CreateTodo.jsx
      - EditTodo.jsx
      - Todo.jsx
    - layout.jsx
    - shared.js
  - **lib**
    - formatDateAndDay.js
    - useFetch.jsx
    - useMutation.jsx
  - **screen**
    - NotFound.jsx
    - SignIn.jsx
    - SignUp.jsx
    - Todos.jsx

  </details>

<br /><br />

> Router

- λ‘κ·ΈμΈ μνμ λ°λΌ νμ΄μ§λ₯Ό κ΅¬λΆνμμ΅λλ€.
- λ£¨νΈ μ»΄ν¬λνΈ `App.js`μμ λΌμ°ν° μΈννμμ΅λλ€.

  <br />

  <details>
    <summary>Router Setting</summary>
    
    <br />

  ```javascript
  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route
              path={routes.signIn}
              element={
                isLoggedIn ? (
                  <Navigate to={routes.todo} replace />
                ) : (
                  <SignIn setIsLoggedIn={setIsLoggedIn} />
                )
              }
            />
            <Route
              path={routes.todo}
              element={
                isLoggedIn ? (
                  <Todos setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <Navigate to={routes.signUp} replace />
                )
              }
            />
            <Route
              path={routes.signUp}
              element={
                isLoggedIn ? (
                  <Navigate to={routes.todo} replace />
                ) : (
                  <SignUp setIsLoggedIn={setIsLoggedIn} />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
  export default App;
  ```

  </details>

<br /><br />

> μ»΄ν¬λνΈ λΆλ¦¬

- λͺ©μ 

1.  λͺ¨λ μ¬μ¬μ©μ μν΄μ λΆλ¦¬νμμ΅λλ€.
2.  μ½λμ λ³΅μ‘μ±μ μ€μ΄κΈ°μν΄ λΆλ¦¬νμμ΅λλ€.

    <br />

     <details>
       <summary>Input μ»΄ν¬λνΈ</summary>

    - μ΄ μ»΄ν¬λνΈλ μ΄λμ μ¬μ©λλκ°?
      - λ‘κ·ΈμΈ λ° νμκ°μ `input`μ μ¬μ©
    - μ΄ μ»΄ν¬λνΈμ μ­ν κ³Ό μ±μμ λ¬΄μμΈκ°?

      - λ³΅μ‘νκ³  λ°λ³΅λλ input μμ±μ propsλ‘ μ λ¬νμ¬ μ¬μ¬μ© μ­ν 

        <br />

    ```javascript
    //... styled-components
    const Input = ({ label, type, value, placeholder, id, onChange }) => {
      return (
        <InputContainer>
          <Label htmlFor={id}>{label}</Label>
          <InputBox>
            <UserIcon>
              {id === "email" ? (
                <AiOutlineMail size={25} />
              ) : (
                <HiOutlineLockClosed size={25} />
              )}
            </UserIcon>
            <InputC
              onChange={onChange}
              id={id}
              type={type}
              value={value}
              placeholder={placeholder}
            />
          </InputBox>
        </InputContainer>
      );
    };
    export default Input;
    ```

       </details>

       <br />

       <details>
         <summary>Button μ»΄ν¬λνΈ</summary>

    - μ΄ μ»΄ν¬λνΈλ μ΄λμ μ¬μ©λλκ°?

      - λ‘κ·ΈμΈ λ° νμκ°μμ `button`

    - μ΄ μ»΄ν¬λνΈμ μ­ν κ³Ό μ±μμ λ¬΄μμΈκ°?

      - `loading` μ€μΈμ§ νμΈ
      - `button message` μ λ¬
        <br />

    ```javascript
    const Button = ({ text, isLoading, disabled }) => {
      return (
        <ButtonContainer>
          <ButtonC disabled={disabled}>
            {isLoading ? "loading..." : text}
          </ButtonC>
        </ButtonContainer>
      );
    };
    export default Button;
    ```

      </details>

      <br />

    <details>
      <summary>CreateTodo μ»΄ν¬λνΈ</summary>

    - μ΄ μ»΄ν¬λνΈλ μ΄λμ μ¬μ©λλκ°?
      - ν¬λλ¦¬μ€νΈ νμ΄μ§(screen) μ¬μ©ν©λλ€.
    - μ΄ μ»΄ν¬λνΈμ μ­ν κ³Ό μ±μμ λ¬΄μμΈκ°?

      - ν¬λ μμ±νλ μ­ν μ νλ©° ν¬λλ¦¬μ€νΈμ todos(ν¬λλ¦¬μ€νΈ) μμ νλ setTodosμ μμ‘΄μ±μ κ°κ³ μμ΅λλ€.
      - ν¬λλ₯Ό μμ±ν  λμ λ³΅μ‘ν λ‘μ§μ κ°κ³  μμ΄ λ°λ‘ λΆλ¦¬νμμ΅λλ€.

      <br />

    ```javascript
    const CreateTodo = ({ setTodoList }) => {
      const [errorMessage, setErrorMessage] = useState("");
      const [submitTodo, { data, isLoading, error }] = useMutation({
        url: "todos",
        method: "POST",
      });
      const [todo, setTodo] = useState("");

      const onChange = (event) => {
        const {
          currentTarget: { value },
        } = event;
        setTodo(value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (todo === "") {
          window.alert("ν  μΌμ μλ ₯ν΄μ£ΌμΈμ.");
          return;
        }
        submitTodo({ todo });
        setTodo("");
      };

      useEffect(() => {
        if (data) {
          setTodoList((prev) => [
            ...prev,
            {
              id: data.id,
              isCompleted: data.isCompleted,
              todo: data.todo,
              userId: data.userId,
            },
          ]);
        }
      }, [data, setTodoList, todo.id, todo.isCompleted]);

      useEffect(() => {
        if (error) {
          setErrorMessage(error);
        }
      }, [error]);

      return (
        <>
          <ToDoForm onSubmit={handleSubmit}>
            <ToDoInput
              onChange={onChange}
              value={todo}
              type="text"
              error={Boolean(errorMessage)}
              placeholder={
                errorMessage ? errorMessage : "ν  μΌμ μλ ₯ν΄μ£ΌμΈμ."
              }
            />
            <ToDoButton>
              {isLoading ? "Loading..." : <FaPlus size={18} />}
            </ToDoButton>
          </ToDoForm>
        </>
      );
    };
    export default CreateTodo;
    ```

      </details>
      <br />

      <details>
       <summary>EditTodo μ»΄ν¬λνΈ</summary>

    - μ΄ μ»΄ν¬λνΈλ μ΄λμ μ¬μ©λλκ°?

      - κ°λ³ todo μ»΄ν¬λνΈμμ μ¬μ©λ©λλ€.

    - μ΄ μ»΄ν¬λνΈμ μ­ν κ³Ό μ±μμ λ¬΄μμΈκ°?

      - κ°λ³ todoλ₯Ό μμ λ§νλ μ­ν ν©λλ€.
      - todos(ν¬λλ¦¬μ€νΈ) μμ νλ setTodosμ κ°λ³ todoμ μνλ₯Ό λ³κ²½ν΄μΌν  todoμ μμ±κ³Ό μμ‘΄μ±μ κ°κ³ μμ΅λλ€.

      <br />

    ```javascript
    const EditTodo = ({
      id: currentTodoId,
      setTodoList,
      setEditMode,
      userId,
      isCompleted,
    }) => {
      const [edit, { data: editData, isLoading: editLoading }] = useMutation({
        url: `todos/${currentTodoId}`,
        method: "PUT",
      });

      const [editTodo, setEditTodo] = useState("");

      const handleEditTodo = (event) => {
        const {
          currentTarget: { value },
        } = event;
        setEditTodo(value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (editTodo === "") return;
        edit({ todo: editTodo, isCompleted: true });
        setEditTodo("");
      };

      useEffect(() => {
        if (editData) {
          setTodoList((prev) => {
            const todoIndex = prev.findIndex(
              (todo) => todo.id === currentTodoId
            );
            const beforeTodo = prev.slice(0, todoIndex);
            const afterTodo = prev.slice(todoIndex + 1);
            const newTodo = {
              id: currentTodoId,
              isCompleted: editData.isCompleted,
              userId,
              todo: editData.todo,
            };
            return [...beforeTodo, newTodo, ...afterTodo];
          });
          setEditMode(false);
        }
      }, [
        editData,
        editTodo,
        isCompleted,
        setEditMode,
        setTodoList,
        currentTodoId,
        userId,
      ]);

      const onCancelEditMode = () => {
        setEditMode(false);
      };

      return (
        <EditForm onSubmit={handleSubmit}>
          <EditInput
            onChange={handleEditTodo}
            type="text"
            placeholder="μμ νκΈ°"
          ></EditInput>
          <EditButtonContainer>
            <EditButton>{editLoading ? "Loading..." : "μμ "}</EditButton>
            <CancelButton onClick={onCancelEditMode}>μ·¨μ</CancelButton>
          </EditButtonContainer>
        </EditForm>
      );
    };
    export default EditTodo;
    ```

    </details>

    <br /><br />

> μ»€μ€ν νμ€ μ¬μ©

- λ°λ³΅λλ ν¨μ λ° λ‘μ§ μ¬μ¬μ© λͺ©μ μΌλ‘ μ»€μ€ν νμ λ§λ€μμ΅λλ€.

  <br />

    <details>
      <summary>useMutation</summary>

  - `POST` μμ²­ν  λ μ½λμ μ¬μ¬μ©κ³Ό λ³΅μ‘μ±μ μ€μ΄κΈ°μν΄ λ§λ€μμ΅λλ€.
  - `mutation` νμ

    - λ°μ΄ν°(`body`)λ₯Ό `POST`ν  μ μλ `mutationν¨μ`μ
    - `POST` μμ²­ ν λ°μ μλ΅λ°μ΄ν°(`response`)μ `error`, `loading`μ λ°νν©λλ€.

    <br />

  ```javascript
  import { useState } from "react";
  import { BASE_URL, getLocalStorage, TOKEN_NAME } from "../server";

  const useMutation = ({ url, method }) => {
    const [value, setValue] = useState({
      data: undefined,
      isLoading: false,
      error: undefined,
    });
    const mutation = async (data) => {
      try {
        const token = getLocalStorage({ name: TOKEN_NAME });
        setValue((prev) => ({ ...prev, isLoading: true }));
        const response = await (
          await fetch(`${BASE_URL}/${url}`, {
            method: method.toUpperCase(),
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token ? token : null}`,
            },
          })
        ).json();
        if (response.message) {
          setValue((prev) => ({ ...prev, error: response.message }));
        }
        setValue((prev) => ({ ...prev, data: response }));
      } catch (error) {
        setValue((prev) => ({ ...prev, error }));
      } finally {
        setValue((prev) => ({ ...prev, isLoading: false }));
      }
    };

    return [mutation, { ...value }];
  };
  export default useMutation;
  ```

    </details>
    <br />

    <details>
      <summary>useFetch</summary>

  - `GET`μμ²­ μ μ½λμ λ³΅μ‘μ±κ³Ό μ¬μ¬μ©λ₯ μ λμ΄κΈ° μν΄ λ§λ€μμ΅λλ€.
  - `useFetch` νμ

    - `GET` μμ²­ μ μ λ¬ λ°λ `data`κ³Ό `loading`, `error`λ₯Ό λ°νν©λλ€.
      <br />

  ```javascript
  import { useEffect, useState } from "react";
  import { BASE_URL, getLocalStorage, TOKEN_NAME } from "../server";

  const useFetch = ({ url }) => {
    const [response, setResponse] = useState({
      data: undefined,
      isLoading: false,
      error: undefined,
    });

    const fetchTodoList = async (url) => {
      const token = getLocalStorage({ name: TOKEN_NAME });
      try {
        setResponse((prev) => ({ ...prev, isLoading: true }));
        const results = await (
          await fetch(`${BASE_URL}/${url}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token ? token : null}`,
            },
          })
        ).json();
        if (results) setResponse((prev) => ({ ...prev, data: results }));
      } catch (error) {
        setResponse((prev) => ({ ...prev, error }));
        return;
      } finally {
        setResponse((prev) => ({ ...prev, isLoading: false }));
      }
    };

    useEffect(() => {
      fetchTodoList(url);
    }, [url]);

    return {
      data: response.data,
      isLoading: response.isLoading,
      error: response.error,
    };
  };
  export default useFetch;
  ```

  </details>
  <br /><br />

> κΈ°ν ν¨μ

  <details>
      <summary>(μ΅μ) formatDateAndDay</summary>

- ν¬λλ¦¬μ€νΈμ λ μ§λ₯Ό νμνκΈ° μν΄ ν¨μλ₯Ό λ§λ€μμ΅λλ€.

  <br />

  ```javascript
  const weekday = [
    "μΌμμΌ",
    "μμμΌ",
    "νμμΌ",
    "μμμΌ",
    "λͺ©μμΌ",
    "κΈμμΌ",
    "ν μμΌ",
  ];

  const formatDateAndDay = (dayAndDateString) => {
    const today = new Date(Date.now());
    const formattedDate = today.toLocaleDateString("ko", {
      day: "numeric",
      month: "long",
    });
    const formattedDay = weekday[today.getDay()];
    if (dayAndDateString === "date") return formattedDate;
    if (dayAndDateString === "day") return formattedDay;
  };

  export default formatDateAndDay;
  ```

  </details>
