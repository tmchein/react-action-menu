import { ActionMenu } from "./components/ActionMenu";
import { useMenuActions } from "./hooks/useMenuActions";
import { ActionMenuContextProvider } from "./shared/context";

const TestComponent = () => {
  const [CancelButton, ProceedButton] = useMenuActions();
  return (
    <>
      <p>
        Would you like to close this window and delete everything permanently?
      </p>
      <CancelButton />
      <ProceedButton />
    </>
  );
};

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActionMenuContextProvider>
        <ActionMenu
          text="Open"
          options={[
            {
              id: "1",
              label: "First Option",
              value: "first option value",
              action: (key) => {
                console.log("hello from first option", key);
              },
            },
            {
              id: "2",
              label: "Second Option",
              value: "second option value",
              renderAction: <TestComponent />,
            },
          ]}
        />
      </ActionMenuContextProvider>
    </div>
  );
}

export default App;
