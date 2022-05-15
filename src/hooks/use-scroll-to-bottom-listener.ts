export const useScrollToBottomListener = <T>(): { isAtBottom: boolean; ref: React.MutableRefObject<T | undefined> } => {
  const ref = useRef<T>()
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)

  useEffect(() => {
    ref.current?.addEventListener('scroll', (e) => {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
      if (bottom)
        setIsAtBottom(true)

      else
        setIsAtBottom(false)
    }, false)
  }, [])
  return { ref, isAtBottom }
}
