type ValidationMessageProps = {
  id?: string
  message?: string
}

export default function ValidationMessage({
  id,
  message,
}: ValidationMessageProps) {
  if (!message) return null

  return (
    <small
      id={id}
      className="error-message"
      role="alert"
      aria-live="polite"
    >
      {message}
    </small>
  )
}