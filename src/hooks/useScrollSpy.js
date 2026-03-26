import { useState, useEffect } from 'react'

// Ce hook détecte quelle section est visible à l'écran
// Utilisation : const activeSection = useScrollSpy(['about', 'skills', 'projects', 'contact'])
function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}

export default useScrollSpy
