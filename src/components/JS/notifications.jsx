//Contains function that will handle in app notifications


const Notifications = ({ notification, onDismiss }) => {
  const successColors = { success: "50fa7b", error: "ff5555" };
  const color = successColors[notification.type];

  return (
    <div style={{
          padding:"12px 16px",
          borderRadius: "8px",
          background: `${color} + "22"`,
          borderLeft: `4px solid ${color}`,
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
    }}>
        <span>notification.message</span>
        <button
            onClick{onDismiss}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem" }}
        >
          ×
      </button>
    </div>
  );
}

export default Notifications;

