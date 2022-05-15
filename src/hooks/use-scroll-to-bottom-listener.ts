export const useScrollToBottomListener = (): { isAtBottom: boolean; ref: React.MutableRefObject<any> } => {
  const ref = useRef<any>()
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)

  useEffect(() => {
    ref.current?.addEventListener('scroll', (e: any) => {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
      if (bottom)
        setIsAtBottom(true)

      else
        setIsAtBottom(false)
    }, false)
  }, [])
  return { ref, isAtBottom }
}
