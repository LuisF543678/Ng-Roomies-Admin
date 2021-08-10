export interface Root {
    usuarios: Usuario | string[]
  }
  
  export interface Usuario {
    admin: boolean
    citas: Cita | string[]
    documentos: Documento | string[]
    father_surname: string
    fecha_nacimiento: string
    fotoperfil: string
    id: number
    mediocontacto: Mediocontacto | string[]
    mother_surname: string
    name: string
    pagos: Pago | string[]
    sexo: string
    solictudes: Solictude | string[]
    username: string
  }
  
  export interface Cita {
    date: string
    hora: number
    info_admin: string
    info_client: string
    lugar: string
  }
  
  export interface Documento {
    foto: string
    id_doc: number
    nombre: string
  }
  
  export interface Mediocontacto {
    id_contac: number
    info: number
    nombre: string
  }
  
  export interface Pago {
    fecha: string
    id_pago: number
  }
  
  export interface Solictude {
    info: string
    status: boolean
  }
  