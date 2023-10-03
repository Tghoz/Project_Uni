PGDMP     0                	    {            test    15.4    15.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16409    test    DATABASE     x   CREATE DATABASE test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE test;
                tgoz    false            �            1259    16425    cliente    TABLE     �   CREATE TABLE public.cliente (
    id_cliente integer NOT NULL,
    nombre character varying(255),
    direccion character varying(255),
    telefono character varying(20)
);
    DROP TABLE public.cliente;
       public         heap    tgoz    false            �            1259    16454    detallefactura    TABLE     �   CREATE TABLE public.detallefactura (
    id_detalle integer NOT NULL,
    id_factura integer,
    id_producto integer,
    cantidad integer,
    "precio " integer,
    iva numeric(5,0),
    sub_total numeric
);
 "   DROP TABLE public.detallefactura;
       public         heap    tgoz    false            �            1259    16439    factura    TABLE     �   CREATE TABLE public.factura (
    id_factura integer NOT NULL,
    id_cliente integer,
    fecha date,
    total numeric(10,2),
    num_factura integer NOT NULL,
    sub_total numeric
);
    DROP TABLE public.factura;
       public         heap    tgoz    false            �            1259    16469    factura_num_factura_seq    SEQUENCE     �   CREATE SEQUENCE public.factura_num_factura_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.factura_num_factura_seq;
       public          tgoz    false    216                       0    0    factura_num_factura_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.factura_num_factura_seq OWNED BY public.factura.num_factura;
          public          tgoz    false    219            �            1259    16449    producto    TABLE     �   CREATE TABLE public.producto (
    id_producto integer NOT NULL,
    nombre character varying(255),
    precio numeric(10,2)
);
    DROP TABLE public.producto;
       public         heap    tgoz    false            �            1259    16432    usuario    TABLE     u   CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    correo_usuario character varying(255) NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    tgoz    false            u           2604    16470    factura num_factura    DEFAULT     z   ALTER TABLE ONLY public.factura ALTER COLUMN num_factura SET DEFAULT nextval('public.factura_num_factura_seq'::regclass);
 B   ALTER TABLE public.factura ALTER COLUMN num_factura DROP DEFAULT;
       public          tgoz    false    219    216                      0    16425    cliente 
   TABLE DATA                 public          tgoz    false    214   �                 0    16454    detallefactura 
   TABLE DATA                 public          tgoz    false    218   �                 0    16439    factura 
   TABLE DATA                 public          tgoz    false    216   �                 0    16449    producto 
   TABLE DATA                 public          tgoz    false    217   �                 0    16432    usuario 
   TABLE DATA                 public          tgoz    false    215                     0    0    factura_num_factura_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.factura_num_factura_seq', 1, false);
          public          tgoz    false    219            w           2606    16431    cliente cliente_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            tgoz    false    214                       2606    16458 "   detallefactura detallefactura_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.detallefactura
    ADD CONSTRAINT detallefactura_pkey PRIMARY KEY (id_detalle);
 L   ALTER TABLE ONLY public.detallefactura DROP CONSTRAINT detallefactura_pkey;
       public            tgoz    false    218            {           2606    16443    factura factura_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT factura_pkey PRIMARY KEY (id_factura);
 >   ALTER TABLE ONLY public.factura DROP CONSTRAINT factura_pkey;
       public            tgoz    false    216            }           2606    16453    producto producto_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id_producto);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            tgoz    false    217            y           2606    16438    usuario usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            tgoz    false    215            �           2606    16459 -   detallefactura detallefactura_id_factura_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detallefactura
    ADD CONSTRAINT detallefactura_id_factura_fkey FOREIGN KEY (id_factura) REFERENCES public.factura(id_factura);
 W   ALTER TABLE ONLY public.detallefactura DROP CONSTRAINT detallefactura_id_factura_fkey;
       public          tgoz    false    216    3195    218            �           2606    16464 .   detallefactura detallefactura_id_producto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detallefactura
    ADD CONSTRAINT detallefactura_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.producto(id_producto);
 X   ALTER TABLE ONLY public.detallefactura DROP CONSTRAINT detallefactura_id_producto_fkey;
       public          tgoz    false    218    3197    217            �           2606    16444    factura factura_id_cliente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT factura_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.cliente(id_cliente);
 I   ALTER TABLE ONLY public.factura DROP CONSTRAINT factura_id_cliente_fkey;
       public          tgoz    false    3191    214    216               
   x���             
   x���             
   x���             
   x���             
   x���         