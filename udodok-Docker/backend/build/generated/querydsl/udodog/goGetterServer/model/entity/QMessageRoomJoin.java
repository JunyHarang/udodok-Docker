package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMessageRoomJoin is a Querydsl query type for MessageRoomJoin
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMessageRoomJoin extends EntityPathBase<MessageRoomJoin> {

    private static final long serialVersionUID = -57353652L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMessageRoomJoin messageRoomJoin = new QMessageRoomJoin("messageRoomJoin");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QMessageRoom messageRoom;

    public final QUser user;

    public QMessageRoomJoin(String variable) {
        this(MessageRoomJoin.class, forVariable(variable), INITS);
    }

    public QMessageRoomJoin(Path<? extends MessageRoomJoin> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMessageRoomJoin(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMessageRoomJoin(PathMetadata metadata, PathInits inits) {
        this(MessageRoomJoin.class, metadata, inits);
    }

    public QMessageRoomJoin(Class<? extends MessageRoomJoin> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.messageRoom = inits.isInitialized("messageRoom") ? new QMessageRoom(forProperty("messageRoom")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

