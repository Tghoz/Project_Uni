--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-10-31 07:23:31

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS tienda;
--
-- TOC entry 4831 (class 1262 OID 16530)
-- Name: tienda; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE tienda WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';


ALTER DATABASE tienda OWNER TO postgres;

\connect tienda

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16579)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 4832 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16531)
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    id_cliente integer NOT NULL,
    nombre character varying(255),
    direccion character varying(255),
    telefono character varying(20)
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16536)
-- Name: detallefactura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detallefactura (
    id_detalle integer NOT NULL,
    id_factura integer,
    id_producto integer,
    cantidad integer,
    "precio " integer,
    iva numeric(5,0),
    sub_total numeric
);


ALTER TABLE public.detallefactura OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16541)
-- Name: factura_num_factura_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.factura_num_factura_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.factura_num_factura_seq OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16542)
-- Name: factura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.factura (
    id_factura integer NOT NULL,
    id_cliente integer,
    fecha date,
    total numeric(10,2),
    num_factura integer DEFAULT nextval('public.factura_num_factura_seq'::regclass) NOT NULL,
    sub_total numeric
);


ALTER TABLE public.factura OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16548)
-- Name: producto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producto (
    id_producto integer NOT NULL,
    nombre character varying(100),
    precio numeric(10,2),
    img character varying(250)
);


ALTER TABLE public.producto OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24593)
-- Name: producto_id_producto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.producto ALTER COLUMN id_producto ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.producto_id_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 221 (class 1259 OID 16551)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_usuario uuid NOT NULL,
    correo_usuario character varying(255) NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 4819 (class 0 OID 16531)
-- Dependencies: 216
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4820 (class 0 OID 16536)
-- Dependencies: 217
-- Data for Name: detallefactura; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4822 (class 0 OID 16542)
-- Dependencies: 219
-- Data for Name: factura; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4823 (class 0 OID 16548)
-- Dependencies: 220
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.producto OVERRIDING SYSTEM VALUE VALUES (1, 'Valorant', 0.00, 'https://firebasestorage.googleapis.com/v0/b/projec-uni.appspot.com/o/valorant.jpg?alt=media&token=0aef8f81-592e-41a1-9ed9-bff824c2ebcf');
INSERT INTO public.producto OVERRIDING SYSTEM VALUE VALUES (25, 'LOL', 0.00, 'https://res.cloudinary.com/dpws7owzf/image/upload/v1698675776/ftboumtbiexhucvcwmwl.jpg');


--
-- TOC entry 4824 (class 0 OID 16551)
-- Dependencies: 221
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuario VALUES ('a8113f98-a155-479b-a74b-cedf204fed54', 'govannytgoz@gmail.com');
INSERT INTO public.usuario VALUES ('fd060c61-9fe5-45cf-91ac-3a6872f245d8', 'reynaldogonzalez@iujo.edu.ve');


--
-- TOC entry 4833 (class 0 OID 0)
-- Dependencies: 218
-- Name: factura_num_factura_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.factura_num_factura_seq', 1, false);


--
-- TOC entry 4834 (class 0 OID 0)
-- Dependencies: 222
-- Name: producto_id_producto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.producto_id_producto_seq', 25, true);


--
-- TOC entry 4664 (class 2606 OID 16555)
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);


--
-- TOC entry 4666 (class 2606 OID 16557)
-- Name: detallefactura detallefactura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detallefactura
    ADD CONSTRAINT detallefactura_pkey PRIMARY KEY (id_detalle);


--
-- TOC entry 4668 (class 2606 OID 16559)
-- Name: factura factura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.factura
    ADD CONSTRAINT factura_pkey PRIMARY KEY (id_factura);


--
-- TOC entry 4670 (class 2606 OID 16561)
-- Name: producto producto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id_producto);


--
-- TOC entry 4672 (class 2606 OID 16591)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 4673 (class 2606 OID 16564)
-- Name: detallefactura detallefactura_id_factura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detallefactura
    ADD CONSTRAINT detallefactura_id_factura_fkey FOREIGN KEY (id_factura) REFERENCES public.factura(id_factura);


--
-- TOC entry 4674 (class 2606 OID 16569)
-- Name: detallefactura detallefactura_id_producto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detallefactura
    ADD CONSTRAINT detallefactura_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.producto(id_producto);


--
-- TOC entry 4675 (class 2606 OID 16574)
-- Name: factura factura_id_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.factura
    ADD CONSTRAINT factura_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.cliente(id_cliente);


-- Completed on 2023-10-31 07:23:31

--
-- PostgreSQL database dump complete
--

