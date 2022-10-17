export interface SidebarInterface {
    actividad:   Actividad;
    necesidades: Necesidade[];
}

export interface Actividad {
    hoy:  Ayer[];
    ayer: Ayer[];
}

export interface Ayer {
    id:       number;
    titulo:   string;
    cantidad: number;
}

export interface Necesidade {
    entrada: string;
    url:     string;
}
