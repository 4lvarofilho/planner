import { X, Tag, Calendar, Clock } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void

}

export function CreateActivityModal ({
  closeCreateActivityModal
}:CreateActivityModalProps){
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
    <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
      <div className='space-y-2'>
        <div className='flex place-items-center justify-between'>
          <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
          <Button>
              <X className="size-5 text-zinc-400" onClick={closeCreateActivityModal} />
          </Button>
        </div>
        <p className='text-sm text-zinc-400'>
        Todos convidados podem visualizar as atividades.
        </p>
      </div>

      <form className='space-y-3'>
        <div className='h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg gap-2 flex items-center'>
          <Tag className='text-zinc-400 size-5' />
          <input type="text" name='activity-title' placeholder='Qual a atividade?' className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className='h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg gap-2 flex items-center flex-1'>
            <Calendar className='text-zinc-400 size-5' />
            <input type="date" name="date-activity" placeholder='20 de agosto' className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
          </div>
          <div className='h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg gap-2 flex items-center max-w-36'>
            <Clock className='text-zinc-400 size-5' />
            <input type="time" placeholder='Horário' className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
          </div>
        </div>
        <Button type="submit" variant="primary" size="full">
            Salvar Atividade
        </Button>
      </form>
    </div>
  </div>
  )
}