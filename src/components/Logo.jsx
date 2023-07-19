export const Logo = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <pre className="text-yellow-300 xl:text-4xl animate-jump-in animate-once animate-ease-linear text-sm">
        {String.raw`
  ██╗     ██████╗ ██╗   ██╗██╗███████╗    ██╗  
 ██╔╝    ██╔═══██╗██║   ██║██║╚══███╔╝    ╚██╗ 
██╔╝     ██║   ██║██║   ██║██║  ███╔╝      ╚██╗
╚██╗     ██║▄▄ ██║██║   ██║██║ ███╔╝       ██╔╝
  ╚██╗   ╚██████╔╝╚██████╔╝██║███████╗    ██╔╝ 
   ╚═╝    ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝    ╚═╝`}
      </pre>
      <pre className="text-xs text-yellow-300 animate-jump-in animate-once animate-ease-linear">
        {String.raw`
 ██████╗  █████╗ ███╗   ███╗███████╗
██╔════╝ ██╔══██╗████╗ ████║██╔════╝
██║  ███╗███████║██╔████╔██║█████╗  
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝`}
      </pre>
    </div>
  )
}
